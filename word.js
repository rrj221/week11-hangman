var inquirer = require('inquirer');
var main = require('./main.js');
var letter = require('./letter.js');
var game = require('./game.js');
var Nyancat = require('nyansole');

var guessedArray = [];
var teamGlobal = '';

function start() {
	inquirer.prompt([{
		type: 'confirm',
		name: 'start',
		message: 'would you like to start the game now?'
	}]).then(function (answers) {
		if (answers.start) {
			chooseDifficulty();
		} else {
			console.log('maybe later... :(')
		}
	});
}

function chooseDifficulty() {
	var teamStart = game.chooseRandomTeam();
	var teamAllUnderscoresStart = letter.initializeDisplayArray(teamStart);
	guessedArray = [];
	inquirer.prompt([{
		type: 'list',
		name: 'difficulty',
		message: 'choose a difficulty',
		choices: ['easy', 'medium', 'hard'],
		default: 1
	}]).then(function (answers) {
		var startingGuesses = setDifficulty(answers);

		console.log('\n////////////////////////////////', '\n');
		console.log('let\'s get started\n');
		console.log('GUESSES REMAINING:', startingGuesses, '\n');
		console.log('NBA TEAM:', teamAllUnderscoresStart.join(' '), '\n');

		askForLetter(false, 0, startingGuesses, teamStart);
	});
}

//this is where most of the game happens
function askForLetter(youWon, counter, startingGuesses, team) {
	if (counter >= startingGuesses) {
		return letter.lost();
	} else if (youWon) {
		var nyancat = (new Nyancat()).start();
		setTimeout(function() {
			nyancat.end();
			game.playAgain();
		}, 10 * 1000);
	} else if (!youWon) {
		inquirer.prompt([{
			name: 'letter',
			message: 'choose a letter',
			validate: function (string) {
				if (string.length !== 1) {
					console.log('\nplease choose only one letter')
					return false;
				} 
				var letter = string.toUpperCase();
				if (letter < 'A' || letter > 'Z') {
					console.log('\nthat doesn\'t look like a letter to me...');
					return false;
				}
				return true;
			}
		}]).then(function (answers) {
			teamGlobal = team;
			if (checkIfGuessed(answers.letter)) {
				console.log('you already guessed that letter');
				return askForLetter(false, counter, startingGuesses, team);
			};

			guessedArray.push(answers.letter);

			//displays guesses and team to screen
			letter.displayToScreen(teamGlobal, answers.letter, guessedArray, startingGuesses - counter);

			var counterNew = incrementCounterIfNeeded(counter, letter.correct);

			youWon = letter.checkIfWon(); 

			askForLetter(youWon, counterNew, startingGuesses, team);
		});
	}
}

function checkIfGuessed(letter) {
	if (guessedArray.indexOf(letter) !== -1) {
		return true;
	}
	return false;
}

function incrementCounterIfNeeded(counter, guessWasCorrect) {
	if (guessWasCorrect) {
		return counter;
	} 
	return counter + 1;
}

function setDifficulty(answersObj) {
	var startingGuessesFunctionScope = 0;
	if (answersObj.difficulty === 'easy') {
		startingGuessesFunctionScope = 10;
	} else if (answersObj.difficulty === 'medium') {
		startingGuessesFunctionScope = 6;
	} else if (answersObj.difficulty === 'hard') {
		startingGuessesFunctionScope = 3;
	}
	return startingGuessesFunctionScope;
}


module.exports.askForLetter = askForLetter;
module.exports.start = start;
module.exports.chooseDifficulty = chooseDifficulty;






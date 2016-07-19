var main = require('./main.js');
var word = require('./word.js');
var game = require('./game.js');

var displayArrayGlobal = [];


function displayToScreen(team, guess, guessesArray, guessesRemaining) {
	var upperCaseGuess = guess.toUpperCase();
	var teamArray = team.split('');
	var correct = false;

	//creates new team with underscores to display
	teamArray.forEach(function (letter, i) {
		if (letter === upperCaseGuess) {
			displayArrayGlobal[i] = letter;
			correct = true;
		} 
	});

	var guessesRemainingNew = incrementGuessesIfNeeded(guessesRemaining, correct) 

	console.log('\n////////////////////////////////', '\n');
	console.log('GUESSES REMAINING:', guessesRemainingNew);
	console.log('GUESSES:', allToUpperCase(guessesArray).join(' '), '\n');
	console.log('NBA TEAM:', displayArrayGlobal.join(' '), '\n');

	module.exports.correct = correct;
}

function checkIfWon() {
	if (displayArrayGlobal.indexOf('_') === -1) {
		console.log('you are a superstar. yes you are.\n');
		return true;
	}
	return false;	
}

function lost() {	
	console.log('you lost. go get \'em next time!\n');
	game.playAgain();
}

function initializeDisplayArray(team) {
	var displayArray = [];
	for (var i = 0; i < team.length; i++) {
		displayArray.push('_');
	}
	displayArrayGlobal = displayArray;
	return displayArray;
}

function allToUpperCase(arrayOfChars) {
	var upperCaseArray = [];
	arrayOfChars.forEach(function (letter, i) {
		upperCaseArray.push(letter.toUpperCase());
	});
	return upperCaseArray;
}

function incrementGuessesIfNeeded(guessesRemaining, guessWasCorrect) {
	if (guessWasCorrect) {
		return guessesRemaining;
	} 
	return guessesRemaining - 1;
}

module.exports.displayToScreen = displayToScreen;
module.exports.checkIfWon = checkIfWon;
module.exports.initializeDisplayArray = initializeDisplayArray;
module.exports.lost = lost;
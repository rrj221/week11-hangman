var inquirer = require('inquirer');
var main = require('./main.js');
var letter = require('./letter.js');

var guessedArray = [];
var team = '';



function start() {
	inquirer.prompt([{
		type: 'confirm',
		name: 'start',
		message: 'would you like to start the game now?'

	}]).then(function (answers) {
		console.log(answers);
	});
}




function askForLetter(haveYouWonYet) {
	if (!haveYouWonYet) {
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
			console.log('thanks for the letter '+answers.letter);
			team = main.team;
			console.log('team:', team)
			if (checkIfGuessed(answers.letter)) {
				console.log('you already guessed that letter');
				return askForLetter(counter);
			};

			guessedArray.push(answers.letter);
			console.log('ok:', team, guessedArray);
			letter.displayToScreen(team, answers.letter);

			haveYouWonYet = letter.checkIfWon();

			askForLetter(haveYouWonYet);
		});
	}
}

function checkIfGuessed(letter) {
	console.log(guessedArray.indexOf(letter));
	if (guessedArray.indexOf(letter) !== -1) {
		return true;
	}
	return false;
}


module.exports.askForLetter = askForLetter;
module.exports.start = start;






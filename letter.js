var main = require('./main.js');
var word = require('./word.js');

var displayArrayGlobal = [];


function displayToScreen(team, guess) {
	console.log('ryan, my man, here\'s the array:', displayArrayGlobal);   	//debuggin
	var upperCaseGuess = guess.toUpperCase();
	console.log('i\'m here');                                              	//debuggin
	var teamArray = team.split('');
	console.log(teamArray);   												//debuggin
	teamArray.forEach(function (letter, i) {
		console.log('iiiiii is:', i);
			if (letter === upperCaseGuess) {
				displayArrayGlobal[i] = letter;
			} 
		// if (letter === upperCaseGuess) {
		// 	console.log(letter, upperCaseGuess);
		// 	console.log('i\'m here2');										//debuggin
		// 	displayArrayGlobal.push(letter);
		// 	console.log('i\'m here3');										//debuggin
		// } else {
		// 	console.log(letter, upperCaseGuess);
		// 	console.log('i\'m here4');										//debuggin
		// 	displayArrayGlobal.push('_');
		// 	console.log('i\'m here5');										//debuggin
		// }
	});
	console.log('i\'m here outside of the if else');						//debuggin
	console.log(displayArrayGlobal.join(' '));								
	console.log('');														//might need this one   
	console.log('hey there');  // what the heck?							//debuggin
}

function checkIfWon() {
	if (displayArrayGlobal.indexOf('_') === -1) {
		console.log('you are a superstar. yes you are.');
		return true;
	}
	return false;	
}

function initializeDisplayArray(team) {
	var displayArray = [];
	for (var i = 0; i < team.length; i++) {
		displayArray.push('_');
	}
	displayArrayGlobal = displayArray;
}

module.exports.displayToScreen = displayToScreen;
module.exports.checkIfWon = checkIfWon;
module.exports.initializeDisplayArray = initializeDisplayArray;
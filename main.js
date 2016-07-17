// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
// Your game.js file will randomly select a word for the player.
// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');

console.log('Welcome to NBA Hangman by Ryan Jarrell');
console.log('');
// console.log('Press any key to continue...');

module.exports.team = game.chooseRandomTeam();
console.log(1, module.exports.team);
module.exports.display = letter.initializeDisplayArray(module.exports.team);
console.log(module.exports.display);

word.askForLetter(false);





// console.log(game.chooseRandomTeam());        this works
// console.log(game.getCurrentTeamIndex());     this works








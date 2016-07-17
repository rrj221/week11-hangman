var main = require('./main.js');
console.log(main.letter);

var currentTeamIndex;

var teams = ["BLAZERS", "BUCKS", "BULLETS", "BULLS", "CAVALIERS", "CELTICS", "CLIPPERS",
			 "GRIZZLIES", "HAWKS", "HEAT", "HORNETS", "JAZZ", "KINGS", "KNICKS", 
			 "LAKERS", "MAGIC", "MAVERICKS", "NETS", "NUGGETS", "PACERS", "PELICANS", 
			 "PISTONS", "RAPTORS", "ROCKETS", "SIXERS", "SONICS", "SPURS", "SUNS",
			 "TIMBERWOLVES", "THUNDER", "WARRIORS", "WIZARDS"];

function chooseRandomTeam() {
	// Create code to randomly choose one of the 30 teams 
	currentTeamIndex = Math.floor(Math.random()*teams.length);
	var currentTeam = teams[currentTeamIndex];	
	return currentTeam;
}	

function getCurrentTeamIndex() {
	return currentTeamIndex;
}


function showLetter(letter) {
	console.log(letter)
}

module.exports.hello = 'hello there';
module.exports.letter = 'letter from game .js: '+JSON.stringify(main, null, 2);
module.exports.chooseRandomTeam = chooseRandomTeam;
module.exports.getCurrentTeamIndex = getCurrentTeamIndex;

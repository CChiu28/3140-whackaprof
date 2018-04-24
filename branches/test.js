let prev;
let scoreCount = 0; // Score for each prof hit
var scoreBoard = document.getElementById('score'); // Get score HTML element
var liveGame = 1; // 0 = game is live, 1 = game is dead

// Function to start game
function startGame() {
	liveGame = 0;
    scoreCount = 0;
    document.getElementById("start").disabled = true; // Disables Start button to prevent overlap
    var profs = $('.prof'); // Get all available prof elements
    $(profs).click(function() { // Adds click handler for prof elements
        $(this).finish(); // Ends animation immediately when clicked
        scoreUp(); // Incremement score
		$(profs).reset("click"); //resets the click handler. 
    });
    const index = randomizeProf(profs); // Get a random prof
	move(profs, index); // Pass profs and index into move function
	
}

// Randomizes which prof is moving
function randomizeProf(profs) {
    const index = Math.floor(Math.random() * profs.length); // Calculate random prof
    if (index === prev) { // Minimizes repeating profs
        return randomizeProf(profs);
    }
    prev = index; // Sets prev to current prof to compare in next method call
    return index;
}

//fucntion to move proffesors
function move(profs, index) {
    // jQuery method that moves blocks by incrementing
    // the 'bottom' property at speed 400
	
    var iProf = $(profs[index]);
	if(liveGame == 0){
		$(iProf).animate({ bottom: '0px' }, 800, function () {
			$(this).animate({ bottom: '-120px' }, 800, function () {
				index = randomizeProf(profs);
				move(profs, index);
			});
			console.log("Moving "+index);
		});
	}
}

// Function to increase score per successful click
function scoreUp() {
    scoreCount++;
    console.log(scoreCount);
    scoreBoard.innerHTML = scoreCount;
}

//Function to reset the game.
function restart(){
	document.getElementById("start").disabled = false;
	liveGame = 1;
	scoreCount = 0;
	scoreBoard.innerHTML = scoreCount;
}

function timer() {
    var timeBoard = document.getElementById("timer");
    const time = 120;
    setTimeout(function(){
        
    },120000);
}
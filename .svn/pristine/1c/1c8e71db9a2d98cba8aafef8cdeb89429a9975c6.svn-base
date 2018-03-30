let prev;
// Function to start game
function startGame() {
    document.getElementById("start").disabled = true;
    var profs = $('.prof'); // Get all available prof elements
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
function move(profs, index) {
    // jQuery method that moves blocks by incrementing
    // the 'bottom' property at speed 400
    var iProf = $(profs[index]);
    $(iProf).animate({ bottom: '30px' }, 400, function () {
        $(this).animate({ bottom: '-80px' }, 400, function () {
            index = randomizeProf(profs);
            move(profs, index);
        });
    });
}
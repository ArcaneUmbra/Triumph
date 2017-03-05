/* Get canvas and set context */

var gc = document.getElementById('gc');
var ctx = gc.getContext('2d');

/* Set the canvas to fill window */

//gc.width = window.innerWidth;
//gc.height = window.innerHeight;

//Testing
gc.width = 400;
gc.height = 200;

// Clear the canvas
var clear = function() {
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0,0,gc.width,gc.height);
};

/*
var gravity = 2;

function gravPull(y) {
	return y += gravity;
}
*/

/* Game Loop */

var Game = {};

// Draws everything
Game.draw = function() {
	clear();
	Level1.draw();
};

// Runs everything
Game.update = function() {
	Level1.objects();
};

// Sets FPS
Game.fps = 50;

// Run the game
Game.run = function() {
	Game.update();
	Game.draw();
};

Game._intervalld = setInterval(Game.run, 1000 / Game.fps);


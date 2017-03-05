/*
	Level1.js
	
	Contains all calls to set up Level 1
 */

/* Platforms */

const platflat = new Platform(20, 40, 20, 80, 20, 80, "#66ff66", 0.5);
const platdown = new Platform(5, 100, 300, 200, 300, 200, "#333333", -0.5);
const bridge = new Platform(30, 200, 80, 120, 80, 120, "#Ff0000", 0);
const block = new Platform(10, 10, 50, 20, 50, 20, "#2222cc", 0);

var Level1 = {};

// Initialises objects
Level1.objects = function() {
	platflat.moveHoz(80);
	platdown.moveVert(80);
	block.gravity(0.5);
	//block.wallCollision(400, 200);
	//wallCollision(block.posX, block.posY, block.width, block.height, 400, 200);
	//block.checkWallCollide();
};

// Draws the level
Level1.draw = function() {
	platflat.draw();
	platdown.draw();
	bridge.draw();
	block.draw();
};

// Calls reset functions to reset the level
Level1.reset = function() {
	platflat.reset();
	platdown.reset();
	block.reset();
};

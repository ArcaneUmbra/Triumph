/* Get canvas and set context */

var gc = document.getElementById('gc');
var ctx = gc.getContext('2d');

/* Set the canvas to fill window */

// Testing

//gc.width = window.innerWidth;
//gc.height = window.innerHeight;

gc.width = 400;
gc.height = 200;

/* Draw a full white page */

var clear = function() {
	ctx.fillStyle = '#ffffff';
	ctx.fillRect(0,0,gc.width,gc.height);
};

/* Draw a bridge */

var bridge = function() {
	ctx.fillStyle ='#FF0000';
	ctx.fillRect( 80, 120, 200, 30);
};

/* Draw a moving platform */

var Platform =  {};

Platform.posX = 20;
Platform.posY = 50;
Platform.moveby = 1;

Platform.move = function() {

	if(Platform.posX == 20 ) {
		Platform.moveby = 1;
	}
	else if(Platform.posX == 80) {
		Platform.moveby = -1;
	}
	
	Platform.posX += Platform.moveby;
	
	//console.log("Right " + Platform.right);
	//console.log("Left " + Platform.left);

};

Platform.draw = function() {
	ctx.fillStyle = '#ff33cc';
	ctx.fillRect( Platform.posX, Platform.posY, 20, 20)
	
	//console.log("draw called");
};

/* Basic Test Game Loop */

var Game = {};

Game.draw = function() {
	clear();
	bridge();
	Platform.draw();
};

Game.update = function() {
	Platform.move();
};

Game.fps = 50;

Game.run = function() {
	Game.update();
	Game.draw();
};

Game._intervalld = setInterval(Game.run, 1000 / Game.fps);


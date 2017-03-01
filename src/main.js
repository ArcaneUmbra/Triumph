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

/* Call Platform class */

const plat1 = new Platform(20, 40, 20, 80, 20, 80, "#66ff66", 0.5);
const plat2 = new Platform(5, 100, 300, 200, 300, 200, "#333333", -0.5);

/* Basic Test Game Loop */

var Game = {};

Game.draw = function() {
	clear();
	bridge();
	plat1.draw();
	plat2.draw();
};

Game.update = function() {
	plat1.moveHoz(80);
	plat2.moveVert(80);
};

Game.fps = 50;

Game.run = function() {
	Game.update();
	Game.draw();
};

Game._intervalld = setInterval(Game.run, 1000 / Game.fps);


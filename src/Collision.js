/*
	Collision.js

	Checks to see if objects have collieded.
*/

function wallCollision(x, y, w, h, cW, cH) {
	if(x + w >= cW) {
		x = cW - w;
	}
	if(x <= 0) {
		x = 0;
	}
	if(y + h >= cH) {
		y = cH - h;
	}
	if(y <= 0) {
		y = 0; 
	}
}

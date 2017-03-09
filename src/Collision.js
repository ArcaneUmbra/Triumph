/*
	Collision.js

	Checks to see if objects have collieded.
*/

function wallCollision(cW, cH) {
	if(this.posX + this.width >= cW) {
		this.posX = cW - this.width;
	}
	if(this.posX <= 0) {
		this.posX = 0;
	}
	if(this.posY + this.height >= cH) {
		this.posY = cH - this.height;
	}
	if(this.posY <= 0) {
		this.posY = 0; 
	}
}

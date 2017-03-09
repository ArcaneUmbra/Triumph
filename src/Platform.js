/*
	This file contains the Class and functions
	of platforms, static or moving objects,
	upon which a character can walk.
*/

class Platform {
	constructor(hight, width, posX, posY, posXs, posYs, fillstyle, speed) {
		// Hight and width of platform
		this.height = hight;
		this.width = width
		// Current position of platform
		this.posX = posX;
		this.posY = posY;
		// Static position of platform, ie. Where to return to 
		this.posXs = posXs;
		this.posYs = posYs;
		// Colour of platform
		this.fillstyle = fillstyle;
		// Speed at which the platform moves
		this.speed = speed;
	}
	
	// Move platform horizontaly
	moveHoz(posX2) {

		// When the platform reaches posX2 it will reverse speed
		if(this.posX == posX2) {
			if(this.speed > 0) {
				this.speed = this.speed * -1;
			}
		}
		// When the platform reaches posXs it will reverse speed
		else if(this.posX == this.posXs) {
			if(this.speed < 0) {
				this.speed = this.speed * -1;
			}
		}

		// Moves the platform
		this.posX += this.speed;
	}

	// Move platform Veticaly
	moveVert(posY2) {
		
		// When the platform reaches posYS it will reverse speed
		if(this.posY == this.posYs) {
			if(this.speed > 0) {
				this.speed = this.speed * -1;
			}
		}
		// When the platform reaches posY2 it will reverse speed
		else if(this.posY == posY2) {
			if(this.speed < 0) {
				this.speed = this.speed * -1;
			}
		}
		
		// Moves the platform
		this.posY += this.speed;
	}

	/*
	// Move platform diagonaly
	moveDiag(posX2, posY2) {
	}
	*/

	// Gravity
	gravity(grav) {
		this.posY += grav;
	}
	
	// Draw the platform
	draw() {
		ctx.fillStyle = this.fillstyle;
		ctx.fillRect(this.posX, this.posY, this.width, this.height);
	}
	
	// Resets the platform to original position
	reset() {
		this.posX = this.posXs;
		this.posY = this.posYs;
	};
};

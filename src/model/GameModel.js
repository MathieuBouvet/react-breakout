
import Paddle from './PaddleModel'
import Ball from './BallModel'

import ConfigurableEntity from './ConfigurableEntity'

class GameModel extends ConfigurableEntity{
	constructor(reduction){
		super("board", reduction);
		this.setting("width");
		this.setting("height");
		this.paddle = new Paddle(reduction);
		this.ball = new Ball(reduction);
	}

	updatePaddlePosition(position){
		// compensate position to center the paddle around the cursor
		position -= this.paddle.width/2;

		// stop paddle to the right
		if(position <= 0){
			position = 0;
		}
		//stop paddle to the left
		if(position >= this.width - this.paddle.width){
			position = this.width - this.paddle.width;
		}
		this.paddle.leftPosition = position;
	}

	run(){
		const nextPosition = this.ball.getNextPosition();
		if(nextPosition.left < 0){
			this.wallCollision(90);
		}else if(nextPosition.left > this.width){
			this.wallCollision(270);
		}else if(nextPosition.top < 0){
			this.wallCollision(180);
		}else if(this.paddle.willCollide(nextPosition)){
			this.paddle.collide(this.ball);
		}else {
			this.ball.moveToNextPosition();
		}
		
		
	}

	// //wallCollision(aiguCallback, obtusCallback, )
	// topWallCollision(){
	// 	const incidence = (180 - this.ball.angle);
	// 	this.ball.moveTo(this.ball.angle + 2*incidence);
	// }

	// leftWallCollision(){
	// 	const incidence = (270 - this.ball.angle);
	// 	this.ball.moveTo(this.ball.angle + 2*incidence);
	// }


	// rightWallCollision(){
	// 	const incidence = (90 - this.ball.angle);
	// 	this.ball.moveTo(this.ball.angle + 2*incidence);
	// }

	// wallAngle is the angle of the perpendicular of wall collisioning
	// 180 for top wall, 90 for right, and 270 for left
	wallCollision(wallAngle){
		const incidence = (wallAngle - this.ball.angle);
		this.ball.moveTo(this.ball.angle + 2*incidence);
	}
}

export default GameModel
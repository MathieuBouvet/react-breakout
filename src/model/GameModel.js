
import Paddle from './PaddleModel'
import Ball from './BallModel'
import Brick from './BrickModel'

import Box from './Box'

class GameModel extends Box{
	constructor(reduction){
		super("board", reduction);
		this.addBindedChild("paddle", new Paddle());
		this.addBindedChild("ball", new Ball());
		this.addBindedChild("brick", new Brick());
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

	willCollide(position){
		return (
			position.left < 0 || position.left > this.width || position.top < 0
		)
	}

	willLoose(position){
		return position.top > this.height;
	}

	// return the angle of the perpendicular of wall collisioning
	// 180 for top wall, 90 for right, and 270 for left
	collisionHow(position){
		if(position.left < 0){
			return 270;
		}
		if(position.left > this.width){
			return 90;
		}
		if(position.top < 0){
			return 180;
		}
	}

	run(){
		const nextPosition = this.ball.getNextPosition();
		if(this.willCollide(nextPosition)){
			this.collide(this.ball);
		}else if(this.paddle.willCollide(nextPosition)){
			this.paddle.collide(this.ball);
		}else if(this.willLoose(nextPosition)){
			
		}else {
			this.ball.moveToNextPosition();
		}
	}

}

export default GameModel
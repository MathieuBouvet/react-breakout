
import Paddle from './PaddleModel'
import Ball from './BallModel'
import BrickFactory from './BrickFactory'

import Settings from './Settings'

import Box from './Box'

class GameModel extends Box{
	constructor(reduction){
		super("board", reduction);
		this.addBindedChild("paddle", new Paddle());
		this.addBindedChild("ball", new Ball());
		//this.addBindedChild("brick", new Brick());
		this.bricks = [];
		this.loadLevel(1);

		this.breakNormal = new Audio('4131.mp3');
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

	willLoose(){
		const position = this.ball.getNextPosition();
		return position.top > this.height + 20;
	}

	// return the angle of the perpendicular of wall collisioning
	// 180 for top wall, 90 for right or left
	collisionHow(ball){
		const position = ball.getNextPosition();
		if(position.left < 0 || position.left > this.width){
			return 90;
		}
		if(position.top < 0){
			return 180;
		}
	}

	run(){
		const nextColliding = this.getNextCollisioning();
		if(nextColliding !== null){
			nextColliding.collide(this.ball);
			// if(nextColliding.markForRemove){
			// 	this.bricks.splice(this.bricks.indexOf(nextColliding), 1);
			// 	this.breakNormal.play();
			// }
		}else if(this.willLoose()){

		}else {
			this.ball.moveToNextPosition();
		}
	}

	// return the next object to collide with the ball, or null if nothing collide
	// WIP : It must be completely dynamic, ie loop through all Box objects...
	getNextCollisioning(){
		const nextBallPosition = this.ball.getNextPosition()
		if(this.willCollide(nextBallPosition)){
			return this;
		}
		if(this.paddle.willCollide(nextBallPosition)){
			return this.paddle;
		}
		for(let i=0 ; i<this.bricks.length ; i++){
			if(this.bricks[i].willCollide(nextBallPosition)){
				return this.bricks[i];
			}
		}
		return null;
	}

	loadLevel(level){
		const brickList = Settings.levels["level"+level].bricks;
		for(let i=0 ; i<brickList.length ; i++){
			let newBrick = BrickFactory.create(brickList[i]);
			newBrick.updateBindValue(this.bindValue);
			this.bricks.push(newBrick);
		}
	}

	updateBindValue(newBindValue){
		super.updateBindValue(newBindValue);
		for(let i=0 ; i<this.bricks.length ; i++){
			this.bricks[i].updateBindValue(newBindValue);
		}
	}

}

export default GameModel
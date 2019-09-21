
import Paddle from './PaddleModel'
import Ball from './BallModel'
import BrickFactory from './BrickFactory'

import Settings, { BrickTypes, GameState } from './Settings'

import Box from './Box'

class GameModel extends Box{
	constructor(reduction){
		super("board", reduction);
		this.addBindedChild("paddle", new Paddle());
		this.addBindedChild("ball", new Ball(this));
		//this.addBindedChild("brick", new Brick());
		this.bricks = [];
		this.level = 0;
		this.levelNumber = this.getLevelNumber();
		this.bricksNumber = 0;

		this.gameState = GameState.RUNNING;

		this.loadLevel(1);
		this.paused = false;

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
		// no need to check for collision if ball is sticked to paddle, or if the game is paused
		if(!this.ball.stickedToPaddle && !this.paused){
			if(this.bricksNumber <= 0){
				this.togglePause();
				// check game won
				if(this.level === this.levelNumber){
					this.gameState = GameState.WON;
				}else {
					this.gameState = GameState.LEVEL_COMPLETED;
				}
				return;
			}
			const nextColliding = this.getNextCollisioning();
			if(nextColliding !== null){
				nextColliding.collide(this.ball);
			}else if(this.willLoose()){

			}else {
				this.ball.moveToNextPosition();
			}
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
		// empty bricks array
		this.bricks.length = 0;

		// get brick list setting
		const brickList = Settings.levels["level"+level].bricks;

		// populate bricks with bricks setting
		for(let i=0 ; i<brickList.length ; i++){
			let newBrick = BrickFactory.create(brickList[i]);
			newBrick.updateBindValue(this.bindValue);
			newBrick.setModelReference(this);
			this.bricks.push(newBrick);
		}
		this.level = level;
		// count number of bricks to destroy (each one except UNBREAKABLE)
		this.bricksNumber = this.bricks.reduce((acc, brick) => {
			if(brick.type === BrickTypes.UNBREAKABLE){
				return acc;
			}
			return ++acc;
		}, 0)
	}

	updateBindValue(newBindValue){
		super.updateBindValue(newBindValue);
		for(let i=0 ; i<this.bricks.length ; i++){
			this.bricks[i].updateBindValue(newBindValue);
		}
	}

	togglePause(){
		this.paused = !this.paused;
		console.log(this.bricksNumber);

	}

	playNextLevel(){
		this.level++;
		this.loadLevel(this.level);
		this.initGame();
		this.togglePause();
	}

	initGame(){
		this.paddle.leftPosition = this.width/2;
		this.ball.stickedToPaddle = true;
		this.ball.moveToNextPosition();
		this.ball.angle = 90;
		this.gameState = GameState.RUNNING;
	}

	getLevelNumber(){
		return Object.keys(Settings.levels).length;
	}

}

export default GameModel
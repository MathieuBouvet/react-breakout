
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
		this.ball.moveToNextPosition();
	}
}

export default GameModel
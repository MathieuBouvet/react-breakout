import settings from './Settings'

import Paddle from './Paddle'

class GameModel {
	constructor(){
		this.paddle = new Paddle(settings.paddle)
	}

	get width(){
		return settings.board.width;
	}
	get height(){
		return settings.board.height;
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
}

export default GameModel
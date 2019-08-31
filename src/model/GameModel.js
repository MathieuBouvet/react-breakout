const BOARD_WIDTH = 1000;
const BOARD_HEIGHT = 600;

class GameModel {
	constructor(){
		this.paddlePosition = 0;
	}

	get width(){
		return BOARD_WIDTH;
	}
	get height(){
		return BOARD_HEIGHT;
	}
	updatePaddlePosition(position){
		// compensate position to center it relative to the cursor
		// 100 should be replace with paddle width/2
		position -= 100;
		if(position <= 0){
			position = 0;
		}
		if(position >= this.width - 200){
			position = this.width - 200;
		}
		this.paddlePosition = position;
	}
}

export default GameModel
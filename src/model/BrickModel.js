import shortid from 'shortid'

import Box from './Box'

class BrickModel extends Box {
	constructor(brickSetting){
		super("brick");
		this.leftPosition = brickSetting.leftPosition;
		this.topPosition = brickSetting.topPosition;
		this.id = shortid.generate();
	}

	collisionHow(ball){

		// Will hit horizontal border ?
		if(ball.topPosition < this.topPosition || ball.topPosition > this.topPosition+this.height){
			// will hit a corner ?
			if(ball.leftPosition < this.leftPosition || ball.leftPosition > this.leftPosition+this.width){
				// corner
				return 45;
			}
			// horizontal
			return 0;
		}
		// vertical
		return 90;
	}
}

export default BrickModel
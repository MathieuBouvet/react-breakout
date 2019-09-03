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
		const ajust = 10;
		const above = (ball.topPosition < (this.topPosition + ajust));
		const under = (ball.topPosition > (this.topPosition + this.height - ajust));
		const left = (ball.leftPosition < (this.leftPosition + ajust));
		const right = (ball.leftPosition > (this.leftPosition + this.width - ajust));

		// top-left and bottom-right corner
		if( (above && left) || (under && right)){
			return 45;
		}
		// bottom-left and top-right corner
		if((above && right) || (under && left)){
			return 135;
		}
		if(above || under){
			return 0;
		}
		return 90;
	}
}

export default BrickModel
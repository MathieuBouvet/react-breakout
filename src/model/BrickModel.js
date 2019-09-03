import Box from './Box'

class BrickModel extends Box {
	constructor(){
		super("brick");
		this.leftPosition = 200;
		this.topPosition = 200;
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
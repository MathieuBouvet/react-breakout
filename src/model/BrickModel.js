import Box from './Box'

class BrickModel extends Box {
	constructor(){
		super("brick");
		this.leftPosition = 200;
		this.topPosition = 200;
	}
}

export default BrickModel
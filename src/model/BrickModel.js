import Box from './Box'

class BrickModel extends Box {
	constructor(){
		super("brick");
		this.leftPosition = 42;
		this.topPosition = 42;
	}
}

export default BrickModel
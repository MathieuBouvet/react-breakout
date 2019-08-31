import Settable from './Settable'

class PaddleModel extends Settable{
	constructor(reduction) {
		super("paddle", reduction);
	}
}

export default PaddleModel
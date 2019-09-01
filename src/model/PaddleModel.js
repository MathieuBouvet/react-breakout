import Box from './Box'

class PaddleModel extends Box{
	constructor(reduction) {
		super("paddle", reduction);
	}

	collide(ball){
		const next = ball.getNextPosition();
		// ratio of the collision offset
		const ballOffset = (next.left - this.leftPosition) / this.width;

		// projection of this ratio between 145 (max 35° left angle) and 35 (max 35° right angle)
		const angle = 145 - 110 * ballOffset;
		ball.moveTo(angle);
	}
}

export default PaddleModel
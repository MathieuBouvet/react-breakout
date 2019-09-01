import Box from './Box'

class PaddleModel extends Box{
	constructor(reduction) {
		super("paddle", reduction);
	}

	collide(ball){
		const next = ball.getNextPosition();
		// ratio of the collision offset
		const ballOffset = (next.left - this.leftPosition) / this.width;

		// projection of this ratio between 135 (max left angle) and 45 (max right angle)
		const angle = 135 - 90 * ballOffset;
		ball.moveTo(angle);
	}
}

export default PaddleModel
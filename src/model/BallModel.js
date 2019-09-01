import PositionableEntity from './PositionableEntity'

function r(angle){
	return angle * Math.PI / 180;
}

class BallModel extends PositionableEntity {
	constructor(coefficient){
		super("ball", coefficient);
		this.setting("angle");
		this.setting("velocity");
		this.setting("size");
		this.nextPosition = this.getNextPosition();
	}

	getNextPosition(){
		return {
			left: this.leftPosition + (this.velocity * Math.cos(r(this.angle))),
			top: this.topPosition + (this.velocity * Math.cos(r(this.angle))),
		}
	}
}

export default BallModel
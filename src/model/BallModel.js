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
	}

	getNextPosition(){
		return {
			left: this.leftPosition + (this.velocity * Math.cos(r(this.angle))),
			top: this.topPosition + (this.velocity * Math.sin(r(-this.angle))),
		}
	}
	setNextPosition(nextPositionObject){
		console.log(nextPositionObject);
		this.topPosition = nextPositionObject.top;
		this.leftPosition = nextPositionObject.left;
	}

	moveToNextPosition(){
		this.setNextPosition(this.getNextPosition());
	}
}

export default BallModel
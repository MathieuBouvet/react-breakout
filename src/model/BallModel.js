import PositionableEntity from './PositionableEntity'

function r(angle){
	return angle * Math.PI / 180;
}

class BallModel extends PositionableEntity {
	constructor(gameModel, coefficient){
		super("ball", coefficient);
		this.setting("angle");
		this.setting("velocity");
		this.setting("size");
		this.setting("stickedToPaddle");
		this.gameModel = gameModel;
	}

	getNextPosition(){
		if(!this.stickedToPaddle){
			return {
				left: this.leftPosition + (this.velocity * Math.cos(r(this.angle))),
				top: this.topPosition + (this.velocity * Math.sin(r(-this.angle))),
			}
		}
		const paddle = this.gameModel.paddle;
		return {
			left: paddle.leftPosition + paddle.width/2,
			top: paddle.topPosition,
		}
	}
	setNextPosition(nextPositionObject){
		this.topPosition = nextPositionObject.top;
		this.leftPosition = nextPositionObject.left;
	}

	moveToNextPosition(){
		this.setNextPosition(this.getNextPosition());
	}

	setAngle(angle){
		if(angle > 360){
			angle -= 360;
		}
		if(angle < 0){
			angle += 360
		}
		this.angle = angle;
	}

	moveTo(angle){
		this.setAngle(angle);
		this.moveToNextPosition();
	}
}

export default BallModel
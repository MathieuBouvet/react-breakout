import PositionableEntity from './PositionableEntity'

class Box extends PositionableEntity {
	constructor(templateName, coefficient){
		super(templateName, coefficient);
		this.setting("width");
		this.setting("height");
		this.markForRemove = false;
	}

	willCollide(position){
		if(this.markForRemove){
			return false;
		}
		const leftBorder = this.leftPosition;
		const rightBorder = leftBorder + this.width;
		const topBorder = this.topPosition;
		const bottomBorder = topBorder + this.height;
		return (   position.left >= leftBorder 
			    && position.left <= rightBorder 
			    && position.top >= topBorder 
			    && position.top <= bottomBorder);
	}

	collisionHow(ball){
		throw new Error(`method 'collisionHow' must be implemented in child class.`);
	}

	collide(ball){
		//const nextPosition = ball.getNextPosition();
		const how = this.collisionHow(ball);
		
		const incidence = (how - ball.angle);
		ball.moveTo(ball.angle + 2*incidence);
	}
}

export default Box
import PositionableEntity from './PositionableEntity'

class Box extends PositionableEntity {
	constructor(templateName, coefficient){
		super(templateName, coefficient);
		this.setting("width");
		this.setting("height");
	}

	willCollide(position){
		const leftBorder = this.leftPosition;
		const rightBorder = leftBorder + this.width;
		const topBorder = this.topPosition;
		const bottomBorder = topBorder + this.height;
		return (   position.left >= leftBorder 
			    && position.left <= rightBorder 
			    && position.top >= topBorder 
			    && position.top <= bottomBorder);
	}

	collisionHow(position){
		throw new Error(`method 'collisionHow' must be implemented in child class.`);
	}

	collide(ball){
		const nextPosition = ball.getNextPosition();
		const how = this.collisionHow(nextPosition);
		
		const incidence = (how - ball.angle);
		ball.moveTo(ball.angle + 2*incidence);
	}
}

export default Box
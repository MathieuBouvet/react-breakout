import BrickModel from './BrickModel'

class BreakableBrick extends BrickModel {
	constructor(brickSetting, life){
		super(brickSetting);
		this.life = life;
	}

	takeHit(){
		this.markForRemove = (--this.life <= 0);
	}

	collide(ball){
		super.collide(ball);
		this.takeHit();
	}
}

export default BreakableBrick
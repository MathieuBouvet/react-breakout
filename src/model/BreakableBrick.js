import BrickModel from './BrickModel'

class BreakableBrick extends BrickModel {
	constructor(brickSetting, life){
		super(brickSetting);
		this.life = life;
	}

	takeHit(){
		this.isNotDestroyed = (--this.life >= 0);
	}
}

export default BreakableBrick
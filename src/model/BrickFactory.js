import Brick from './BrickModel'
import BreakableBrick from './BreakableBrick'
import { BrickTypes } from './Settings'

class BrickFactory {
	static create(brickSetting){
		const type = brickSetting.type;
		if(type === BrickTypes.NORMAL){
			return new BreakableBrick(brickSetting, 1);
		}
		if(type === BrickTypes.RESISTANT){
			return new BreakableBrick(brickSetting, 2);
		}
		if(type === BrickTypes.UNBREAKABLE){
			return new Brick(brickSetting);
		}
	}
}

export default BrickFactory
import PositionableEntity from './PositionableEntity'

class Box extends PositionableEntity {
	constructor(templateName, coefficient){
		super(templateName, coefficient);
		this.setting("width");
		this.setting("height");
	}
}

export default Box
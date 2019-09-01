import ConfigurableEntity from './ConfigurableEntity'

class PositionableEntity extends ConfigurableEntity {
	constructor(templateName, coefficient){
		super(templateName, coefficient);
		this.setting("leftPosition");
		this.setting("topPosition");
	}
}

export default PositionableEntity
import ConfigurableEntity from './ConfigurableEntity'

class PaddleModel extends ConfigurableEntity{
	constructor(reduction) {
		super("paddle", reduction);
		this.setting("width");
		this.setting("height");
		this.setting("topPosition");
		this.setting("leftPosition");
	}
}

export default PaddleModel
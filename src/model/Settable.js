import Settings from './Settings'

class Settable {
	constructor(name, reduction=1){
		for(let field in Settings[name].dynamic){
			this[field] = Settings[name].dynamic[field] * reduction;
		}
		for(let field in Settings[name].static){
			this[field] = Settings[name].static[field]
		}
	}
}

export default Settable
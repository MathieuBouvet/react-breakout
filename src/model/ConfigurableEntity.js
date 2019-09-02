import Settings from "./Settings"


class ConfigurableEntity {
	constructor(templateName, bindValue=1){
		this._setTemplate(templateName);
		this.bindValue = bindValue;
		this.bindedProperties = [];
		this.bindedChildren = [];
	}
	setting(propertyName){
		const binded = this._checkSetting(propertyName);
		const theSettings = Settings.templates[this.templateName];
		if(binded){
			this[propertyName] = theSettings.binded[propertyName] * this.bindValue;
			this.bindedProperties.push(propertyName);
		}else{
			this[propertyName] = theSettings.free[propertyName];
		}
	}
	_setTemplate(templateName){
		const templateSetting = Settings.templates[templateName];
		if(typeof templateSetting === 'undefined'){
			throw new Error(`Template "${templateName}" does not exist in Settings.`)
		}
		// binded key exist, but no entries in it
		if(typeof templateSetting.binded !== 'undefined' && 
			(Object.keys(templateSetting.binded).length === 0 
			&& templateSetting.binded.constructor === Object)){

			throw new Error(`No keys found under "binded" for ${templateName} template in settings.`);
		}
		this.hasBindedSettings = (typeof templateSetting.binded !== 'undefined');
		// free key exist, but no entries in it
		if(typeof templateSetting.free !== 'undefined' && 
			(Object.keys(templateSetting.free).length === 0 
			&& templateSetting.free.constructor === Object)){

			throw new Error(`No keys found under "free" for ${templateName} template in settings.`);
		}
		this.hasFreeSettings = (typeof templateSetting.free !== 'undefined');
		this.templateName = templateName;
	}

	// return true if a binded key exists, false if a free key exists, throw errors otherwise
	_checkSetting(settingName){
		let bindedKeyFound = false;
		let freeKeyFound = false;
		
		const theSettings = Settings.templates[this.templateName]
		// look for setting in binded if there are binded settings in template
		if(this.hasBindedSettings){
			bindedKeyFound = (typeof theSettings.binded[settingName] !== 'undefined');
		}

		// look for setting in free if there are free settings in template
		if(this.hasFreeSettings){
			freeKeyFound = (typeof theSettings.free[settingName] !== 'undefined');
		}
		if(bindedKeyFound && freeKeyFound){
			throw new Error(`Key "${settingName}" exists as free AND binded in ${this.templateName} template.`);
		}
		if(!bindedKeyFound && !freeKeyFound){
			throw new Error(`Setting "${settingName}" does not exist in ${this.templateName} template.`);
		}
		return bindedKeyFound;
	}

	addBindedChild(name, child){
		this[name] = child;
		this.bindedChildren.push(name);
		this[name].updateBindValue(this.bindValue);
	}

	updateBindValue(newBindValue){
		this.bindValue = newBindValue;
		for(let i=0; i<this.bindedProperties.length ; i++){
			const bindedProperty = this.bindedProperties[i];
			this[bindedProperty] = this[bindedProperty] * newBindValue;
		}
		for(let i=0 ; i<this.bindedChildren.length ; i++){
			const bindedChild = this.bindedChildren[i];
			this[bindedChild].updateBindValue(newBindValue);
		}
	}


}

export default ConfigurableEntity
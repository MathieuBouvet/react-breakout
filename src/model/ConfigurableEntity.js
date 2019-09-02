import Settings from "./Settings"


class ConfigurableEntity {
	constructor(templateName, bindValue=1){
		this._setTemplate(templateName);
		this.bindValue = bindValue;
		this.bindedProperties = [];
		this.bindedChildren = [];
	}
	setting(propertyName){
		const dynamic = this._checkSetting(propertyName);
		const theSettings = Settings.templates[this.templateName];
		if(dynamic){
			this[propertyName] = theSettings.dynamic[propertyName] * this.bindValue;
			this.bindedProperties.push(propertyName);
		}else{
			this[propertyName] = theSettings.static[propertyName];
		}
	}
	_setTemplate(templateName){
		const templateSetting = Settings.templates[templateName];
		if(typeof templateSetting === 'undefined'){
			throw new Error(`Template "${templateName}" does not exist in Settings.`)
		}
		// dynamic key exist, but no entries in it
		if(typeof templateSetting.dynamic !== 'undefined' && 
			(Object.keys(templateSetting.dynamic).length === 0 
			&& templateSetting.dynamic.constructor === Object)){

			throw new Error(`No keys found under "dynamic" for ${templateName} template in settings.`);
		}
		this.dynamicEnabled = (typeof templateSetting.dynamic !== 'undefined');
		// static key exist, but no entries in it
		if(typeof templateSetting.static !== 'undefined' && 
			(Object.keys(templateSetting.static).length === 0 
			&& templateSetting.static.constructor === Object)){

			throw new Error(`No keys found under "static" for ${templateName} template in settings.`);
		}
		this.staticEnabled = (typeof templateSetting.static !== 'undefined');
		this.templateName = templateName;
	}

	// return true if dynamic key exists, false if static key exists, throw errors otherwise
	_checkSetting(settingName){
		let dynamicKeyFound = false;
		let staticKeyFound = false;
		
		const theSettings = Settings.templates[this.templateName]
		// look for setting in dynamic if there are dynamic settings in template
		if(this.dynamicEnabled){
			dynamicKeyFound = (typeof theSettings.dynamic[settingName] !== 'undefined');
		}

		// look for setting in static if there are static settings in template
		if(this.staticEnabled){
			staticKeyFound = (typeof theSettings.static[settingName] !== 'undefined');
		}
		if(dynamicKeyFound && staticKeyFound){
			throw new Error(`Key "${settingName}" exists as static AND dynamic in ${this.templateName} template.`);
		}
		if(!dynamicKeyFound && !staticKeyFound){
			throw new Error(`Setting "${settingName}" does not exist in ${this.templateName} template.`);
		}
		return dynamicKeyFound;
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
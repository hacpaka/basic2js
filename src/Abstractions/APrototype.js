import {kebabCase} from 'case-anything';

export class APrototype {

	get Class() {
		return this.constructor.name;
	}

	get Name() {
		return kebabCase(this.Class);
	}

	constructor() {
		if (this.constructor === APrototype) {
			throw new Error(`Cannot instantiate an abstract class: ${this.Class}!`);
		}
	}
}

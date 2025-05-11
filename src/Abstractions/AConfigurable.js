import fs from 'fs';
import {kebabCase} from 'case-anything';
import {APrototype} from './APrototype.js';

export class AConfigurable extends APrototype {
	static #configuration = {};

	get Dictionary() {
		return Object.fromEntries((AConfigurable.#configuration?.dictionary ?? []).map(v => [v.name, v.include]));
	}

	get Configuration() {
		return (AConfigurable.#configuration?.targets ?? []).filter(v => v.name === kebabCase(this.Class)).shift();
	}

	static {
		try {
			AConfigurable.#configuration = JSON.parse(fs.readFileSync('./configuration.json', 'utf8'));
		} catch {
			throw new Error(`Failed to load configuration!`);
		}
	}

	constructor() {
		super();

		if (this.constructor === AConfigurable) {
			throw new Error(`Cannot instantiate an abstract class: ${this.Class}!`);
		}
	}

	get Traversable() {
		return !!this.Configuration?.accept?.length;
	}
}
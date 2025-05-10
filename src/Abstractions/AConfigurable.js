import fs from 'fs';

export class AConfigurable {
	static #configuration = {};

	get Configuration() {
		return (AConfigurable.#configuration?.targets ?? []).filter(v => v.name === this.constructor.name.toLowerCase()).shift()?.accept ?? [];
	}

	static {
		try {
			AConfigurable.#configuration = JSON.parse(fs.readFileSync('./configuration.json', 'utf8'));
		} catch {
			throw new Error(`Failed to load configuration!`);
		}
	}

	constructor() {
		if (this.constructor === AConfigurable) {
			throw new Error(`Cannot instantiate an abstract class: ${this.constructor.name}!`);
		}
	}
}
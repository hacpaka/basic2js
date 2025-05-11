import {consume} from '../../../packages/regula/parser.js';
import {APrototype} from '../../Abstractions/APrototype.js';

export class APattern extends APrototype {
	#signature;

	constructor(signature) {
		super();

		if (this.constructor === APattern) {
			throw new Error(`Cannot instantiate an abstract class: ${this.constructor.name}!`);
		}

		if (signature?.constructor !== RegExp) {
			throw new Error('Invalid signature!');
		}

		this.#signature = new RegExp(signature, 's');
	}

	#content = '';

	get Content() {
		return this.#content;
	}

	#succeeded = false;

	get Succeeded() {
		return this.#succeeded;
	}

	#analyze(before, after) {
		if (after.length > before.length) {
			throw new Error(`Invalid comparison!`);
		}

		if (after.length < before.length) {
			this.#succeeded = true;
		}

		return after;
	}

	Consume(line) {
		this.#succeeded = false;
		this.#content = "";

		return this.#analyze(line, consume(this.#signature, line, (key, value) => {
			switch (key) {

				case 'content':
					this.#content = value;
					break;

				default:
					throw new Error(`Undefined fragment: ${key}!`);
			}
		}));
	}
}
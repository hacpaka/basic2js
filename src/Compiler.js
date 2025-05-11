import fs from 'fs';
import Address from './Consumers/Address.js';
import {CompilationError} from './Exceptions/CompilationError.js';

function filter(target, handler) {
	return Object.fromEntries(Object.entries(target).filter(v => handler(v[1])));
}

export class Compiler {
	#lines = [];

	get Size() {
		return this.#lines.length;
	}

	constructor(target) {
		fs.readFileSync(target, 'utf-8').split(/\n/).forEach((line, index) => {

			if (!/\S+/.test(line)) {
				return;
			}

			this.#lines.push({
				line, index
			});
		});
	}

	#index = 0;

	get Index() {
		return this.#index;
	}

	#line;

	get Line() {
		return this.#line;
	}

	#unconsumed;

	get Unconsumed() {
		return this.#unconsumed;
	}

	#nodes = [];

	get Nodes() {
		return this.#nodes;
	}

	get Length() {
		return this.Nodes.length;
	}

	async Compile() {
		for ({line: this.#line} of this.#lines) {
			const consumer = new Address();

			if ((this.#unconsumed = (await (consumer).Consume(this.#line))).length > 0) {
				throw new CompilationError(`Invalid syntax!`);
			}

			this.#nodes.push(consumer);
			this.#index++;
		}
	}
}
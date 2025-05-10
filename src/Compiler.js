import fs from 'fs';
import {Address} from './Address.js';

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

	async Compile() {
		const compiled = [];

		for ({line: this.#line} of this.#lines) {
			const consumer = new Address();

			if ((await (consumer).Consume(this.#line)).length > 0) {
				throw new Error(`Invalid syntax!`);
			}

			compiled.push(consumer);

			this.#index++;
		}

		// const output = [];
		// for (const state of this.#states) {
		// 	output.push(state.Compile());
		// }

		return compiled;//output.filter(v => !!v).join("\n");
	}
}
import {upperCamelCase} from 'case-anything';
import {AConfigurable} from '../../Abstractions/AConfigurable.js';
import {CompilationError} from '../../Exceptions/CompilationError.js';

export class AConsumer extends AConfigurable {
	Finalizing() {
		return false;
	}

	Ignore() {
		return false;
	}

	Unbreakable() {
		return false;
	}

	get Containerable() {
		return !!this.Configuration?.containerable;
	}

	get Autocomplete() {
		return !!this.Configuration?.autocomplete;
	}

	get Greedy() {
		return !!this.Configuration?.greedy;
	}

	#level = 0;

	get Level() {
		return this.#level;
	}

	constructor(level = 0) {
		super();

		if (!!level) {
			this.#level = level;
		}
	}

	#collection = [];

	get Children() {
		return this.#collection;
	}

	get Length() {
		return this.#collection.length;
	}

	#content = "";

	get Content() {
		return this.#content;
	}

	async Consume(line) {
		console.log(`>> [${this.Class}]: {${line.length}}'${line}'`);

		for await (const pattern of this.#Patterns()) {
			line = pattern.Consume(line);

			if (!pattern.Succeeded) {
				continue;
			}

			console.log(`** [${this.Class}]: %${pattern.Name} => '${pattern.Content}'`);
			this.#content = pattern.Content;

			console.log(`<< [${this.Class}]: {${line.length}}'${line}'`);
			return this.#through(line);
		}

		return line;
	}

	async #through(line) {
		if (!this.Traversable || line.length < 1) {
			return line;
		}

		console.log(`=> [${this.Class}]: {${line.length}}'${line}'`);

		let length = 0;
		do {
			length = line.length;
			console.log(`+> [${this.Class}]: {${line.length}}'${line}'`);

			for await (const consumers of this.#Traverse()) {
				for (const consumer of consumers) {

					if (line.length < 1) {
						return line;
					}

					if (/^\s*:/.test(line) && this.Level > 0 && !this.Unbreakable()) {
						console.log(`^^ [${this.Class}]: BREAK ${this.#level}`);
						return line
					}

					console.log(`?? [${this.Class}:${consumer.Class}] {${line.length}} '${line}'`);
					if ((line = await (consumer).Consume(line)).length >= length) {
						console.log(`!! [${this.Class}:${consumer.Class}] {${line.length}} '${line}'`);

						continue;
					}

					if (!consumer.Ignore()) {
						this.#collection.push(consumer);
					}

					if (consumer.Finalizing()) {
						console.log(`<= [${this.Class}:${consumer.Class}]`);
						return line;
					}

					if (this.Greedy) {
						console.log(`<* [${this.Class}:${consumer.Class}]`);
						return line;
					}

					console.log(`@@ [${this.Class}:${consumer.Class}] {${line.length}} '${line}'`);
					break;
				}
			}
		} while (line.length < length);

		if (this.Containerable) {

			if (!this.Autocomplete || line.length > 0) {
				console.log(this.Autocomplete, line.length, line);
				throw new CompilationError(`Container is not finalized: {${this.Name}}${this.Content}!`);
			}
		}

		console.log(`<# ${this.Class}: {${line.length}}${line}'`);
		return line;
	}

	async *#Patterns() {
		for (const consumer of this.Dictionary[this.Name] ?? []) {
			yield new ((await import(`../../Patterns/${upperCamelCase(consumer.replace(/^%/, ""))}.js`)).default)();
		}
	}

	*#Acceptances() {
		for (const value of this.Configuration?.accept ?? []) {

			if (!/^&/.test(value)) {
				yield value;
			} else {

				if (!this.Aliases[value] || !Array.isArray(this.Aliases[value])) {
					throw new CompilationError(`Unrecognized group: ${value}!`);
				}

				for (const alias of this.Aliases[value]) {
					yield alias;
				}
			}
		}
	}

	async *#Traverse() {
		yield Array.fromAsync(Array.from(this.#Acceptances()).map(async v => {
			try {
				return new ((await import(`../${upperCamelCase(v)}.js`)).default)(this.Level + 1);
			} catch (e) {
				throw new Error(`Undefined target: ${v}!\n${e.message}`);
			}
		}));
	}

	get Traversable() {
		return !!this.Configuration?.accept?.length;
	}
}



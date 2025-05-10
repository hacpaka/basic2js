import {upperCamelCase} from 'case-anything';
import {AConfigurable} from './Abstractions/AConfigurable.js';

export class AConsumer extends AConfigurable {
	Break() {
		return false;
	}

	#signature;

	constructor(signature) {
		super();

		if (signature?.constructor !== RegExp) {
			throw new Error('Invalid signature!');
		}

		this.#signature = new RegExp(signature, 's');
	}

	#content = "";

	get Content() {
		return this.#content;
	}

	#children = [];

	get Children() {
		return this.#children;
	}

	get Length() {
		return this.#children.length;
	}

	async Consume(line) {
		console.log(`>> ${this.constructor.name}: ${line}`);

		const data = line.match(this.#signature);

		if (data === null) {
			return line;
		}

		for (const [key, value] of Object.entries(data?.groups ?? {})) {
			switch (key) {

				case 'content':
					this.#content = value;
					break;

				default:
					throw new Error(`Undefined fragment: ${key}!`);
			}
		}

		console.log(`-> ${this.constructor.name}: {${this.Traversable()}} '${this.#content}'`);
		console.log(`*> ${line.substring(0, data?.index)}${line.substring(data?.index + data[0].length)}'`);

		return await this.#through(`${line.substring(0, data?.index)}${line.substring(data?.index + data[0].length)}`);
	}

	async #through(line) {
		if (!this.Traversable()) {
			return line;
		}

		let length = 0;

		do {
			length = line.length;
			console.log(`=> ${this.constructor.name}: ${line}`);

			for await (const consumer of this.#consumers()) {
				console.log(`?> [${this.constructor.name}:${consumer.constructor.name}] ${line}`);

				line = await (consumer).Consume(line);
				if (line.length >= length) {
					continue;
				}

				if (consumer.Break()) {
					console.log(`#^ ${this.constructor.name}`);
					return line;
				}

				this.#children.push(consumer);
			}

			console.log(`[${this.constructor.name}]: <=${line.length}:${length}`);
		} while (line.length < length);


		console.log(`#! ${this.constructor.name}: ${line.length}:${length}`);

		return line;
	}


	async* #consumers() {
		for (const configuration of this.Configuration) {
			yield await AConsumer.#create(configuration);
		}
	}

	Traversable() {
		return this.Configuration.length > 0;
	}

	static async #create(target) {
		try {
			return new ((await import(`./${upperCamelCase(target)}.js`)).default)();
		} catch (e) {
			throw new Error(`Undefined target: ${target}!\n${e.message}`);
		}
	}
}



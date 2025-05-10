import {upperCamelCase} from 'case-anything';
import {AConfigurable} from './Abstractions/AConfigurable.js';

export class AConsumer extends AConfigurable {
	#signature;

	constructor(signature) {
		super();

		if (signature?.constructor !== RegExp) {
			throw new Error('Invalid signature!');
		}

		this.#signature = new RegExp(signature, 's');
	}

	#content;

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
					throw new Error(`Undefined fragment: ${key}!`)
			}
		}

		return this.#through(`${line.substring(0, data?.index)}${line.substring(data?.index + data[0].length)}`);
	}

	async #through(line) {
		let length = line.length;

		do {
			console.log(line);

			for await (const consumer of this.#consumers()) {
				line = await (consumer).Consume(line);

				if (line.length < length) {
					if (consumer.constructor.name === 'Break') {
						return line;
					}

					if (line.length < 1) {
						return line;
					}

					this.#children.push(consumer);
					length = line.length;

					break;
				}
			}
		} while (line.length < length);

		return line;
	}


	async* #consumers() {
		for (const configuration of this.Configuration) {
			yield await AConsumer.#create(configuration);
		}
	}

	static async #create(target) {
		try {
			return new ((await import(`./${upperCamelCase(target)}.js`)).default)();
		} catch (e) {
			throw new Error(`Undefined target: ${target}!\n${e.message}`);
		}
	}
}



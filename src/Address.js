import {AConsumer} from './AConsumer.js';

export class Address extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>[0-9]+)\s+/s, level);
	}
}


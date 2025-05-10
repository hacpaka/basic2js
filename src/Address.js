import {AConsumer} from './AConsumer.js';

export class Address extends AConsumer {

	constructor() {
		super(/^(?<content>[0-9]+)\s+/s);
	}
}


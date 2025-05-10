import {AConsumer} from './AConsumer.js';

export default class Variable extends AConsumer {

	constructor() {
		super(/^(?<content>[A-Za-z][A-Za-z0-9]*[$]?)\s*/);
	}
}


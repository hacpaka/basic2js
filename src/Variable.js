import {AConsumer} from './AConsumer.js';

export default class Variable extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>[A-Za-z][A-Za-z0-9]*[$]?)\s*/, level);
	}
}


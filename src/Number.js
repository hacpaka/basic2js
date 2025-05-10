import {AConsumer} from './AConsumer.js';

export default class Number extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>[0-9]+(?:\.[0-9]+)?|\.[0-9]+)\s*/, level);
	}
}


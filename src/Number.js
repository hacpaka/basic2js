import {AConsumer} from './AConsumer.js';

export default class Number extends AConsumer {

	constructor() {
		super(/^(?<content>[0-9]+)\s*/);
	}
}


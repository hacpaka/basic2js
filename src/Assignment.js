import {AConsumer} from './AConsumer.js';

export default class Assignment extends AConsumer {
	constructor() {
		super(/^\s*=\s*/);
	}
}


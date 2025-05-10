import {AConsumer} from './AConsumer.js';

export default class Assignment extends AConsumer {
	constructor(level = 0) {
		super(/^\s*=\s*/, level);
	}
}


import {AConsumer} from './AConsumer.js';

export default class If extends AConsumer {

	constructor(level = 0) {
		super(/^IF\s*/, level);
	}
}


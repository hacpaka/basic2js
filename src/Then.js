import {AConsumer} from './AConsumer.js';

export default class Then extends AConsumer {

	constructor(level = 0) {
		super(/^THEN\s*/, level);
	}

	Unbreakable() {
		return true;
	}
}


import {AConsumer} from './AConsumer.js';

export default class DeclarationSeparator extends AConsumer {

	constructor(level = 0) {
		super(/^\s*,\s*/, level);
	}

	Ignore() {
		return true;
	}
}


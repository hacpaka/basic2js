import {AConsumer} from './AConsumer.js';

export default class DeclarationSeparator extends AConsumer {

	constructor() {
		super(/^\s*,\s*/);
	}

	Ignore() {
		return true;
	}
}


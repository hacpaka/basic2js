import {AConsumer} from './AConsumer.js';

export default class ContainerTerminator extends AConsumer {

	constructor(level = 0) {
		super(/^\s*\)\s*/, level);
	}

	Break() {
		return true;
	}
}


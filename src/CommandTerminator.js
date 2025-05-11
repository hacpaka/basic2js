import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class CommandTerminator extends AConsumer {

	constructor(level = 0) {
		super(/^\s*\)\s*/, level);
	}

	Finalizing() {
		return true;
	}
}


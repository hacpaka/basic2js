import {AConsumer} from './Abstractions/AConsumer.js';

export default class CommandTerminator extends AConsumer {

	Finalizing() {
		return true;
	}
}


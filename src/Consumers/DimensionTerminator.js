import {AConsumer} from './Abstractions/AConsumer.js';

export default class DimensionTerminator extends AConsumer {

	Finalizing() {
		return true;
	}
}


import {AConsumer} from './AConsumer.js';

export default class DimensionSeparator extends AConsumer {

	constructor() {
		super(/^\s*,\s*/);
	}

	Ignore() {
		return true;
	}
}


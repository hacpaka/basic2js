import {AConsumer} from './AConsumer.js';

export default class DimensionSeparator extends AConsumer {

	constructor(level = 0) {
		super(/^\s*,\s*/, level);
	}

	Ignore() {
		return true;
	}
}


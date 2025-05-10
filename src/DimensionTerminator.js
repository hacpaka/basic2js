import {AConsumer} from './AConsumer.js';

export default class DimensionTerminator extends AConsumer {

	constructor() {
		super(/^\s*\)\s*/);
	}

	Break() {
		return true;
	}
}


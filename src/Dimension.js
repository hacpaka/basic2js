import {AConsumer} from './AConsumer.js';

export default class Dimension extends AConsumer {

	constructor() {
		super(/^\s*\(\s*/);
	}
}


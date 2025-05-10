import {AConsumer} from './AConsumer.js';

export default class Container extends AConsumer {

	constructor(level = 0) {
		super(/^\s*\(\s*/, level);
	}
}


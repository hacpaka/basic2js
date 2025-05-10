import {AConsumer} from './AConsumer.js';

export default class Break extends AConsumer {

	constructor() {
		super(/^\s*:\s*/);
	}
}


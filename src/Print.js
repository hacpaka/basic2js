import {AConsumer} from './AConsumer.js';

export default class Print extends AConsumer {

	constructor() {
		super(/^PRINT\s*/);
	}
}


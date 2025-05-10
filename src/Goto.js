import {AConsumer} from './AConsumer.js';

export default class Goto extends AConsumer {

	constructor(level = 0) {
		super(/^GOTO\s*/, level);
	}
}
import {AConsumer} from './AConsumer.js';

export default class Gosub extends AConsumer {

	constructor(level = 0) {
		super(/^GOSUB\s*/, level);
	}
}
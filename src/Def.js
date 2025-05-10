import {AConsumer} from './AConsumer.js';

export default class Def extends AConsumer {

	constructor(level = 0) {
		super(/^DEF\s+/, level);
	}
}


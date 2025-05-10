import {AConsumer} from './AConsumer.js';

export default class Dim extends AConsumer {

	constructor(level = 0) {
		super(/^DIM\s+/, level);
	}
}


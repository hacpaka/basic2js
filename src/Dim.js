import {AConsumer} from './AConsumer.js';

export default class Dim extends AConsumer {

	constructor() {
		super(/^(?<this>DIM)\s+/);
	}
}


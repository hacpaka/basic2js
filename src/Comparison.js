import {AConsumer} from './AConsumer.js';

export default class Comparison extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content><>|>|<)\s*/, level);
	}
}


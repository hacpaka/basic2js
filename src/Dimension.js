import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Dimension extends AConsumer {

	constructor(level = 0) {
		super(/^\s*\(\s*/, level);
	}
}


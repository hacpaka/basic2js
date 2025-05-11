import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Print extends AConsumer {

	constructor(level = 0) {
		super(/^PRINT\s*/, level);
	}
}


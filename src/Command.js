import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Command extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>INT|RND|SQR|ORD)\(\s*/, level);
	}
}


import {AConsumer} from './AConsumer.js';

export default class Command extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>INT|RND)\(\s*/, level);
	}
}


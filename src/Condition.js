import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Condition extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>OR)\s*/, level);
	}
}


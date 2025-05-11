import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Separator extends AConsumer {
	constructor(level = 0) {
		super(/^\s*;\s*/, level);
	}
}


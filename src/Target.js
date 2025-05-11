import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Target extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>[0-9]+)\s*/s, level);
	}
}


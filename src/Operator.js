import {AConsumer} from './Consumers/Abstractions/AConsumer.js';

export default class Operator extends AConsumer {

	constructor(level = 0) {
		super(/^(?<content>[*+^-])\s*/, level);
	}
}


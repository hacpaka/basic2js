import {AConsumer} from './Abstractions/AConsumer.js';

export default class StatementSeparator extends AConsumer {

	Ignore() {
		return true;
	}
}


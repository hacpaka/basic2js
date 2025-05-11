import {AConsumer} from './Abstractions/AConsumer.js';

export default class Break extends AConsumer {
	Ignore() {
		return true;
	}
}


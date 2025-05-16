import {AConsumer} from './Abstractions/AConsumer.js';

export default class ContainerTerminator extends AConsumer {

	Finalizing() {
		return true;
	}
}


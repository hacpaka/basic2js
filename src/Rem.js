import {AConsumer} from './AConsumer.js';

export default class Rem extends AConsumer {

	constructor() {
		super(/^REM\s*(?<content>.*)?$/s);
	}
}
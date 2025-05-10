import {AConsumer} from './AConsumer.js';

export default class Rem extends AConsumer {

	constructor(level = 0) {
		super(/^REM\s*(?<content>.*)?$/s, level);
	}
}
import {APattern} from './Abstractions/APattern.js';

export default class Print extends APattern {

	constructor() {
		super(/^PRINT\s*/);
	}
}


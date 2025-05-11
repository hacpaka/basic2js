import {APattern} from './Abstractions/APattern.js';

export default class RightBracket extends APattern {

	constructor() {
		super(/^\s*\)\s*/);
	}
}


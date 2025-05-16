import {APattern} from './Abstractions/APattern.js';

export default class Comma extends APattern {

	constructor() {
		super(/^\s*,\s*/);
	}
}


import {APattern} from './Abstractions/APattern.js';

export default class Assignment extends APattern {
	constructor() {
		super(/^\s*=\s*/);
	}
}


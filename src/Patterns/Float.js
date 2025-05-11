import {APattern} from './Abstractions/APattern.js';

export default class Float extends APattern {

	constructor() {
		super(/^(?<content>[+-]?[0-9]*\.[0-9+])?\s*/);
	}
}


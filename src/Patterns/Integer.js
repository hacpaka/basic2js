import {APattern} from './Abstractions/APattern.js';

export default class Integer extends APattern {

	constructor() {
		super(/^(?<content>[+-]?[0-9]+)\s*/);
	}
}


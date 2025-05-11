import {APattern} from './Abstractions/APattern.js';

export default class String extends APattern {

	constructor() {
		super(/^(?<content>"[^"]*")\s*/);
	}
}


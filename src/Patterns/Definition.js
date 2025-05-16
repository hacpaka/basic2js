import {APattern} from './Abstractions/APattern.js';

export default class Definition extends APattern {

	constructor() {
		super(/^(?<content>[A-Za-z][A-Za-z0-9]*[$]?)\s*\(/);
	}
}


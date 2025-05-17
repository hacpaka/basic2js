import {APattern} from './Abstractions/APattern.js';

export default class If extends APattern {

	constructor() {
		super(/^IF\s*/);
	}
}


import {APattern} from './Abstractions/APattern.js';

export default class Break extends APattern {
	constructor() {
		super(/^:\s*/);
	}
}


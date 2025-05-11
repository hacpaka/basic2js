import {APattern} from './Abstractions/APattern.js';

export default class Command extends APattern {

	constructor() {
		super(/^(?<content>INT|RND|SQR|ORD)\s*\(\s*/);
	}
}


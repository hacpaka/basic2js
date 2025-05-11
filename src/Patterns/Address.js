import {APattern} from './Abstractions/APattern.js';

export default class Address extends APattern {
	constructor() {
		super(/^(?<content>[0-9]+)\s*/);
	}
}


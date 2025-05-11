import {APattern} from './Abstractions/APattern.js';

export default class Operator extends APattern {

	constructor() {
		super(/^(?<content>[*+^-])\s*/);
	}
}


import {APattern} from './Abstractions/APattern.js';

export default class Goto extends APattern {

	constructor() {
		super(/^GOTO\s*/);
	}
}
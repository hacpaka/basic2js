import {APattern} from './Abstractions/APattern.js';

export default class Rem extends APattern {

	constructor() {
		super(/^REM\s*(?<content>.*)?$/s);
	}
}
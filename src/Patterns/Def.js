import {APattern} from './Abstractions/APattern.js';

export default class Def extends APattern {

	constructor() {
		super(/^DEF\s+/);
	}
}


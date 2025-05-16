import {APattern} from './Abstractions/APattern.js';

export default class Dim extends APattern {

	constructor() {
		super(/^DIM\s+/);
	}
}


import {APattern} from './Abstractions/APattern.js';

export default class Comparison extends APattern {

	constructor() {
		super(/^(?<content><>|>|<)\s*/);
	}
}


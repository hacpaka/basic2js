import {APattern} from './Abstractions/APattern.js';

export default class Then extends APattern {

	constructor() {
		super(/^THEN\s*/);
	}

}


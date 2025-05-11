export function consume(pattern, target, handler) {
	if (pattern.constructor !== RegExp) {
		throw new Error(`Invalid pattern!`);
	}

	const matches = target.match(pattern);
	if (matches == null) {
		return target;
	}

	for (const pair of Object.entries(target.match(pattern)?.groups ?? {})) {
		handler(...pair);
	}

	return `${target.substring(0, matches?.index)}${target.substring(matches?.index + matches[0].length)}`;
}
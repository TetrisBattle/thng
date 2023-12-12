function isObject(item) {
	return item && typeof item === 'object' && !Array.isArray(item)
}

function deepMerge(target, ...sources) {
	if (!sources.length) return target
	const source = sources.shift()

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} })
				deepMerge(target[key], source[key])
			} else if (
				Array.isArray(target[key]) &&
				Array.isArray(source[key])
			) {
				if (
					target[key].every((item) => typeof item === 'string') &&
					source[key].every((item) => typeof item === 'string')
				) {
					Object.assign(target, {
						[key]: [...target[key], ...source[key]],
					})
				} else {
					source[key].forEach((item, index) => {
						target[key][index] = deepMerge(target[key][index], item)
					})
				}
			} else Object.assign(target, { [key]: source[key] })
		}
	}

	return deepMerge(target, ...sources)
}

exports.deepMerge = deepMerge

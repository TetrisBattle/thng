/* eslint-disable @typescript-eslint/no-explicit-any */

export function isObject(item: any): item is Record<string, any> {
	return item && typeof item === 'object' && !Array.isArray(item)
}

export function mergeDeep<T extends Record<string, any>>(
	target: T,
	...sources: T[]
): T {
	if (!sources.length) return target

	const source = sources.shift()

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) {
					// Create a shallow copy of the source[key] type
					const copy = {} as T[Extract<keyof T, string>]
					target[key] = mergeDeep(copy, source[key])
				} else {
					// Ensure target[key] is the same type as source[key]
					target[key] = mergeDeep(target[key], source[key])
				}
			} else {
				// Assign source[key] to target[key] while preserving type
				target[key as keyof T] = source[key]
			}
		}
	}

	return mergeDeep(target, ...sources)
}

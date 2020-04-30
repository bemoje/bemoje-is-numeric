import isNumber from '@bemoje/is-number'

/**
 * Determine whether a value is numeric or not.
 * @param {*} value
 * @returns {boolean}
 */
export default function isNumeric(value) {
	if (isNumber(value)) {
		return true
	}

	if (typeof value === 'string' && value.trim() !== '') {
		return Number.isFinite ? Number.isFinite(+value) : isFinite(+value)
	}

	return false
}

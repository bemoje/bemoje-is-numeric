import isNumber from '@bemoje/is-number'
import isNumericString from '@bemoje/is-numeric-string'

/**
 * Determine whether a value is numeric or not.
 * @param {*} value
 * @returns {boolean}
 */
export default function isNumeric(value) {
	return isNumber(value) || isNumericString(value)
}

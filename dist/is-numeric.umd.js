(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-number'), require('@bemoje/is-numeric-string')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-number', '@bemoje/is-numeric-string'], factory) :
	(global = global || self, global['is-numeric'] = factory(global.isNumber, global.isNumericString));
}(this, (function (isNumber, isNumericString) { 'use strict';

	isNumber = isNumber && Object.prototype.hasOwnProperty.call(isNumber, 'default') ? isNumber['default'] : isNumber;
	isNumericString = isNumericString && Object.prototype.hasOwnProperty.call(isNumericString, 'default') ? isNumericString['default'] : isNumericString;

	/**
	 * Determine whether a value is numeric or not.
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isNumeric(value) {
		return isNumber(value) || isNumericString(value)
	}

	return isNumeric;

})));

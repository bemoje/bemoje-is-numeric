(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-number')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-number'], factory) :
	(global = global || self, global['is-numeric'] = factory(global.isNumber));
}(this, (function (isNumber) { 'use strict';

	isNumber = isNumber && Object.prototype.hasOwnProperty.call(isNumber, 'default') ? isNumber['default'] : isNumber;

	/**
	 * Determine whether a value is numeric or not.
	 * @param {*} value
	 * @returns {boolean}
	 */
	function isNumeric(value) {
		if (isNumber(value)) {
			return true
		}

		if (typeof value === 'string' && value.trim() !== '') {
			return Number.isFinite ? Number.isFinite(+value) : isFinite(+value)
		}

		return false
	}

	return isNumeric;

})));

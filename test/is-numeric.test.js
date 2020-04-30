import isNumeric from '../src/is-numeric'

describe('isNumeric', () => {
	test('works', () => {
		expect(isNumeric(3)).toBe(true)
		expect(isNumeric(Number(3))).toBe(true)
		expect(isNumeric(new Number(3))).toBe(true)
		expect(isNumeric('3')).toBe(true)
		expect(isNumeric('.6')).toBe(true)
		expect(isNumeric(NaN)).toBe(false)
		expect(isNumeric(Infinity)).toBe(false)
		expect(isNumeric(Number.POSITIVE_INFINITY)).toBe(false)
		expect(isNumeric(Number.NEGATIVE_INFINITY)).toBe(false)
		expect(isNumeric(Number.NaN)).toBe(false)
		expect(isNumeric(Number.EPSILON)).toBe(true)
		expect(isNumeric(Number.MAX_SAFE_INTEGER)).toBe(true)
		expect(isNumeric(Number.MIN_SAFE_INTEGER)).toBe(true)
		expect(isNumeric(Number.MIN_VALUE)).toBe(true)
		expect(isNumeric(Number.MAX_VALUE)).toBe(true)
	})
})

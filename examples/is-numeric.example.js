import isNumeric from '../src/is-numeric'

isNumeric(3)
//=> true

isNumeric(Number(3))
//=> true

isNumeric(new Number(3))
//=> true

isNumeric('3')
//=> true

isNumeric('.6')
//=> true

isNumeric(NaN)
//=> false

isNumeric(Infinity)
//=> false

isNumeric(Number.POSITIVE_INFINITY)
//=> false

isNumeric(Number.NEGATIVE_INFINITY)
//=> false

isNumeric(Number.NaN)
//=> false

isNumeric(Number.EPSILON)
//=> true

isNumeric(Number.MAX_SAFE_INTEGER)
//=> true

isNumeric(Number.MIN_SAFE_INTEGER)
//=> true

isNumeric(Number.MIN_VALUE)
//=> true

isNumeric(Number.MAX_VALUE)
//=> true

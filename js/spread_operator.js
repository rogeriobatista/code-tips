
// Uses to Spread Operator

// Get Sum
const sum = (...values) => values.reduce((sum, value) => sum += value, 0)
sum(1, 2, 3, 4, 5)

// Get Min Value
const min = (...values) => Math.min(...values)
min(5, 4, 3, 2, 1)

// Get Max Value
const max = (...values) => Math.max(...values)
max(10, 20, 30 ,40, 50)

// Concat arrays
const mergeValues = (values, values2) => [...values,...values2]
mergeValues([1,2,3], [4,5,6,7,8])

// Copy an array without keep references
const copyValues = (values) => [...values]
copyValues(['a', 'b', 'c'])









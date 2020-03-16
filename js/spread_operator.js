// Spread Operator
function sum(...params) {
    return params.reduce((sum, param) => sum += param, 0)
}
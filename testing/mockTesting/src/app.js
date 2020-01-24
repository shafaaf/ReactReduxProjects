const { add, subtract, multiply, divide } = require('./math');

const doAdd = (a, b) => add(a, b);
const doSubtract = (a, b) => subtract(a, b);
const doMultiply = (a, b) => multiply(a, b);
const doDivide = (a, b) => divide(a, b);

module.exports = {
    doAdd,
    doSubtract,
    doMultiply,
    doDivide
};

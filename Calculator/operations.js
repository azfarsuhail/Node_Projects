"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.mul = exports.minus = exports.add = void 0;
function add(num1, num2) {
    return num1 + num2;
}
exports.add = add;
function minus(num1, num2) {
    return num1 - num2;
}
exports.minus = minus;
function mul(num1, num2) {
    return num1 * num2;
}
exports.mul = mul;
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}
exports.divide = divide;

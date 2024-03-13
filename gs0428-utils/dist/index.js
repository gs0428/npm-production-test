"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.div = exports.mul = exports.sub = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;
function mul(a, b) {
    return a * b;
}
exports.mul = mul;
function div(a, b) {
    if (b === 0) {
        console.error("denominator cannot be '0'");
        return 0;
    }
    return a / b;
}
exports.div = div;

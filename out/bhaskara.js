"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bhaskara;
function Bhaskara(a, b, c) {
    if (a === 0) {
        throw new Error('O valor de a não pode ser zero');
    }
    var delta = b * b - 4 * a * c;
    if (delta < 0) {
        return { x1: null, x2: null };
    }
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { x1: x1, x2: x2 };
}

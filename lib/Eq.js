"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contramap = exports.eq = exports.getMonoid = exports.eqDate = exports.getTupleEq = exports.getStructEq = exports.eqBoolean = exports.eqNumber = exports.eqString = exports.strictEqual = exports.eqStrict = exports.fromEquals = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
/**
 * @since 2.0.0
 */
exports.URI = 'Eq';
/**
 * @since 2.0.0
 */
function fromEquals(equals) {
    return {
        equals: function (x, y) { return x === y || equals(x, y); }
    };
}
exports.fromEquals = fromEquals;
/**
 * @since 2.5.0
 */
exports.eqStrict = {
    // tslint:disable-next-line: deprecation
    equals: strictEqual
};
/**
 * Use `eqStrict` instead
 *
 * @since 2.0.0
 * @deprecated
 */
function strictEqual(a, b) {
    return a === b;
}
exports.strictEqual = strictEqual;
/**
 * @since 2.0.0
 */
exports.eqString = exports.eqStrict;
/**
 * @since 2.0.0
 */
exports.eqNumber = exports.eqStrict;
/**
 * @since 2.0.0
 */
exports.eqBoolean = exports.eqStrict;
/**
 * @since 2.0.0
 */
function getStructEq(eqs) {
    return fromEquals(function (x, y) {
        for (var k in eqs) {
            if (!eqs[k].equals(x[k], y[k])) {
                return false;
            }
        }
        return true;
    });
}
exports.getStructEq = getStructEq;
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { getTupleEq, eqString, eqNumber, eqBoolean } from 'fp-ts/lib/Eq'
 *
 * const E = getTupleEq(eqString, eqNumber, eqBoolean)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @since 2.0.0
 */
function getTupleEq() {
    var eqs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        eqs[_i] = arguments[_i];
    }
    return fromEquals(function (x, y) { return eqs.every(function (E, i) { return E.equals(x[i], y[i]); }); });
}
exports.getTupleEq = getTupleEq;
/**
 * @since 2.0.0
 */
exports.eqDate = {
    equals: function (x, y) { return x.valueOf() === y.valueOf(); }
};
var empty = {
    equals: function () { return true; }
};
/**
 * @since 2.6.0
 */
function getMonoid() {
    return {
        concat: function (x, y) { return fromEquals(function (a, b) { return x.equals(a, b) && y.equals(a, b); }); },
        empty: empty
    };
}
exports.getMonoid = getMonoid;
/**
 * @since 2.0.0
 */
exports.eq = {
    URI: exports.URI,
    contramap: function (fa, f) { return fromEquals(function (x, y) { return fa.equals(f(x), f(y)); }); }
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.eq);
var contramap = /*@__PURE__*/ (function () { return pipeables.contramap; })();
exports.contramap = contramap;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = exports.mapWithIndex = exports.map = exports.foldMapWithIndex = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.nonEmptyArray = exports.unzip = exports.zip = exports.zipWith = exports.fold = exports.concat = exports.of = exports.filterWithIndex = exports.filter = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.init = exports.last = exports.groupBy = exports.groupSort = exports.group = exports.getEq = exports.getSemigroup = exports.max = exports.min = exports.reverse = exports.tail = exports.head = exports.getShow = exports.fromArray = exports.snoc = exports.cons = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
var RNEA = require("./ReadonlyNonEmptyArray");
/**
 * @since 2.0.0
 */
exports.URI = 'NonEmptyArray';
/* tslint:enable:readonly-keyword */
/**
 * Append an element to the front of an array, creating a new non empty array
 *
 * @example
 * import { cons } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(cons(1, [2, 3, 4]), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */
exports.cons = RNEA.cons;
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */
exports.snoc = RNEA.snoc;
/**
 * Builds a `NonEmptyArray` from an `Array` returning `none` if `as` is an empty array
 *
 * @since 2.0.0
 */
exports.fromArray = RNEA.fromArray;
/**
 * @since 2.0.0
 */
exports.getShow = RNEA.getShow;
/**
 * @since 2.0.0
 */
exports.head = RNEA.head;
/**
 * @since 2.0.0
 */
exports.tail = RNEA.tail;
/**
 * @since 2.0.0
 */
exports.reverse = RNEA.reverse;
/**
 * @since 2.0.0
 */
exports.min = RNEA.min;
/**
 * @since 2.0.0
 */
exports.max = RNEA.max;
/**
 * Builds a `Semigroup` instance for `NonEmptyArray`
 *
 * @since 2.0.0
 */
exports.getSemigroup = RNEA.getSemigroup;
/**
 * @example
 * import { getEq, cons } from 'fp-ts/lib/NonEmptyArray'
 * import { eqNumber } from 'fp-ts/lib/Eq'
 *
 * const E = getEq(eqNumber)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 2]), true)
 * assert.strictEqual(E.equals(cons(1, [2]), [1, 3]), false)
 *
 * @since 2.0.0
 */
exports.getEq = RNEA.getEq;
function group(E) {
    return RNEA.group(E);
}
exports.group = group;
/**
 * Sort and then group the elements of an array into non empty arrays.
 *
 * @example
 * import { cons, groupSort } from 'fp-ts/lib/NonEmptyArray'
 * import { ordNumber } from 'fp-ts/lib/Ord'
 *
 * assert.deepStrictEqual(groupSort(ordNumber)([1, 2, 1, 1]), [cons(1, [1, 1]), cons(2, [])])
 *
 * @since 2.0.0
 */
exports.groupSort = RNEA.groupSort;
/**
 * Splits an array into sub-non-empty-arrays stored in an object, based on the result of calling a `string`-returning
 * function on each element, and grouping the results according to values returned
 *
 * @example
 * import { cons, groupBy } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(groupBy((s: string) => String(s.length))(['foo', 'bar', 'foobar']), {
 *   '3': cons('foo', ['bar']),
 *   '6': cons('foobar', [])
 * })
 *
 * @since 2.0.0
 */
exports.groupBy = RNEA.groupBy;
/**
 * @since 2.0.0
 */
exports.last = RNEA.last;
/**
 * Get all but the last element of a non empty array, creating a new array.
 *
 * @example
 * import { init } from 'fp-ts/lib/NonEmptyArray'
 *
 * assert.deepStrictEqual(init([1, 2, 3]), [1, 2])
 * assert.deepStrictEqual(init([1]), [])
 *
 * @since 2.2.0
 */
exports.init = RNEA.init;
/**
 * @since 2.0.0
 */
exports.sort = RNEA.sort;
/**
 * @since 2.0.0
 */
exports.insertAt = RNEA.insertAt;
/**
 * @since 2.0.0
 */
exports.updateAt = RNEA.updateAt;
/**
 * @since 2.0.0
 */
exports.modifyAt = RNEA.modifyAt;
/**
 * @since 2.0.0
 */
function copy(nea) {
    var l = nea.length;
    var as = Array(l);
    for (var i = 0; i < l; i++) {
        as[i] = nea[i];
    }
    return as;
}
exports.copy = copy;
function filter(predicate) {
    return RNEA.filter(predicate);
}
exports.filter = filter;
/**
 * @since 2.0.0
 */
exports.filterWithIndex = RNEA.filterWithIndex;
/**
 * @since 2.0.0
 */
exports.of = RNEA.of;
function concat(fx, fy) {
    return RNEA.concat(fx, fy);
}
exports.concat = concat;
/**
 * @since 2.5.0
 */
exports.fold = RNEA.fold;
/**
 * @since 2.5.1
 */
exports.zipWith = RNEA.zipWith;
/**
 * @since 2.5.1
 */
exports.zip = RNEA.zip;
/**
 * @since 2.5.1
 */
exports.unzip = RNEA.unzip;
/**
 * @since 2.0.0
 */
exports.nonEmptyArray = 
/*@__PURE__*/
(function () { return Object.assign({}, RNEA.readonlyNonEmptyArray, { URI: exports.URI }); })();
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.nonEmptyArray);
var alt = /*@__PURE__*/ (function () { return pipeables.alt; })();
exports.alt = alt;
var ap = /*@__PURE__*/ (function () { return pipeables.ap; })();
exports.ap = ap;
var apFirst = /*@__PURE__*/ (function () { return pipeables.apFirst; })();
exports.apFirst = apFirst;
var apSecond = /*@__PURE__*/ (function () { return pipeables.apSecond; })();
exports.apSecond = apSecond;
var chain = /*@__PURE__*/ (function () { return pipeables.chain; })();
exports.chain = chain;
var chainFirst = /*@__PURE__*/ (function () { return pipeables.chainFirst; })();
exports.chainFirst = chainFirst;
var duplicate = /*@__PURE__*/ (function () { return pipeables.duplicate; })();
exports.duplicate = duplicate;
var extend = /*@__PURE__*/ (function () { return pipeables.extend; })();
exports.extend = extend;
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
exports.flatten = flatten;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var mapWithIndex = /*@__PURE__*/ (function () { return pipeables.mapWithIndex; })();
exports.mapWithIndex = mapWithIndex;
var reduce = /*@__PURE__*/ (function () { return pipeables.reduce; })();
exports.reduce = reduce;
var reduceWithIndex = /*@__PURE__*/ (function () { return pipeables.reduceWithIndex; })();
exports.reduceWithIndex = reduceWithIndex;
var reduceRight = /*@__PURE__*/ (function () { return pipeables.reduceRight; })();
exports.reduceRight = reduceRight;
var reduceRightWithIndex = /*@__PURE__*/ (function () { return pipeables.reduceRightWithIndex; })();
exports.reduceRightWithIndex = reduceRightWithIndex;
// from RNEA
var foldMapWithIndex = /*@__PURE__*/ (function () { return RNEA.foldMapWithIndex; })();
exports.foldMapWithIndex = foldMapWithIndex;
var foldMap = /*@__PURE__*/ (function () { return RNEA.foldMap; })();
exports.foldMap = foldMap;

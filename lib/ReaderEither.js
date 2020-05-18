"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOrElse = exports.fromPredicate = exports.fromOption = exports.fromEither = exports.mapLeft = exports.map = exports.flatten = exports.chainFirst = exports.chain = exports.bimap = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.chainEitherKW = exports.chainW = exports.readerEither = exports.chainEitherK = exports.fromEitherK = exports.getReaderValidation = exports.local = exports.asks = exports.ask = exports.getApplyMonoid = exports.getApplySemigroup = exports.getSemigroup = exports.swap = exports.orElse = exports.getOrElseW = exports.getOrElse = exports.fold = exports.leftReader = exports.rightReader = exports.right = exports.left = exports.URI = void 0;
var E = require("./Either");
var EitherT_1 = require("./EitherT");
var pipeable_1 = require("./pipeable");
var Reader_1 = require("./Reader");
var ValidationT_1 = require("./ValidationT");
var T = /*@__PURE__*/ EitherT_1.getEitherM(Reader_1.reader);
/**
 * @since 2.0.0
 */
exports.URI = 'ReaderEither';
/**
 * @since 2.0.0
 */
exports.left = T.left;
/**
 * @since 2.0.0
 */
exports.right = T.of;
/**
 * @since 2.0.0
 */
exports.rightReader = T.rightM;
/**
 * @since 2.0.0
 */
exports.leftReader = T.leftM;
/**
 * @since 2.0.0
 */
function fold(onLeft, onRight) {
    return function (ma) { return T.fold(ma, onLeft, onRight); };
}
exports.fold = fold;
/**
 * @since 2.0.0
 */
function getOrElse(onLeft) {
    return function (ma) { return T.getOrElse(ma, onLeft); };
}
exports.getOrElse = getOrElse;
/**
 * @since 2.6.0
 */
exports.getOrElseW = getOrElse;
/**
 * @since 2.0.0
 */
function orElse(onLeft) {
    return function (ma) { return T.orElse(ma, onLeft); };
}
exports.orElse = orElse;
/**
 * @since 2.0.0
 */
exports.swap = T.swap;
/**
 * Semigroup returning the left-most non-`Left` value. If both operands are `Right`s then the inner values are
 * appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
function getSemigroup(S) {
    return Reader_1.getSemigroup(E.getSemigroup(S));
}
exports.getSemigroup = getSemigroup;
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return Reader_1.getSemigroup(E.getApplySemigroup(S));
}
exports.getApplySemigroup = getApplySemigroup;
/**
 * @since 2.0.0
 */
function getApplyMonoid(M) {
    return {
        concat: getApplySemigroup(M).concat,
        empty: exports.right(M.empty)
    };
}
exports.getApplyMonoid = getApplyMonoid;
/**
 * @since 2.0.0
 */
function ask() {
    return E.right;
}
exports.ask = ask;
/**
 * @since 2.0.0
 */
function asks(f) {
    return function (r) { return E.right(f(r)); };
}
exports.asks = asks;
/**
 * @since 2.0.0
 */
function local(f) {
    return function (ma) { return function (q) { return ma(f(q)); }; };
}
exports.local = local;
/**
 * @since 2.3.0
 */
function getReaderValidation(S) {
    var T = ValidationT_1.getValidationM(S, Reader_1.reader);
    return __assign(__assign({ _E: undefined }, exports.readerEither), T);
}
exports.getReaderValidation = getReaderValidation;
/**
 * @since 2.4.0
 */
function fromEitherK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return fromEither(f.apply(void 0, a));
    };
}
exports.fromEitherK = fromEitherK;
/**
 * @since 2.4.0
 */
function chainEitherK(f) {
    return chain(fromEitherK(f));
}
exports.chainEitherK = chainEitherK;
/**
 * @since 2.0.0
 */
exports.readerEither = {
    URI: exports.URI,
    bimap: T.bimap,
    mapLeft: T.mapLeft,
    map: T.map,
    of: exports.right,
    ap: T.ap,
    chain: T.chain,
    alt: T.alt,
    throwError: exports.left
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.readerEither);
var alt = /*@__PURE__*/ (function () { return pipeables.alt; })();
exports.alt = alt;
var ap = /*@__PURE__*/ (function () { return pipeables.ap; })();
exports.ap = ap;
var apFirst = /*@__PURE__*/ (function () { return pipeables.apFirst; })();
exports.apFirst = apFirst;
var apSecond = /*@__PURE__*/ (function () { return pipeables.apSecond; })();
exports.apSecond = apSecond;
var bimap = /*@__PURE__*/ (function () { return pipeables.bimap; })();
exports.bimap = bimap;
var chain = /*@__PURE__*/ (function () { return pipeables.chain; })();
exports.chain = chain;
var chainFirst = /*@__PURE__*/ (function () { return pipeables.chainFirst; })();
exports.chainFirst = chainFirst;
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
exports.flatten = flatten;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var mapLeft = /*@__PURE__*/ (function () { return pipeables.mapLeft; })();
exports.mapLeft = mapLeft;
var fromEither = /*@__PURE__*/ (function () { return pipeables.fromEither; })();
exports.fromEither = fromEither;
var fromOption = /*@__PURE__*/ (function () { return pipeables.fromOption; })();
exports.fromOption = fromOption;
var fromPredicate = /*@__PURE__*/ (function () { return pipeables.fromPredicate; })();
exports.fromPredicate = fromPredicate;
var filterOrElse = /*@__PURE__*/ (function () { return pipeables.filterOrElse; })();
exports.filterOrElse = filterOrElse;
/**
 * @since 2.6.0
 */
exports.chainW = chain;
/**
 * @since 2.6.1
 */
exports.chainEitherKW = chainEitherK;

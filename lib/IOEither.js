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
exports.filterOrElse = exports.fromPredicate = exports.fromOption = exports.fromEither = exports.mapLeft = exports.map = exports.flatten = exports.chainFirst = exports.chain = exports.bimap = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.chainEitherKW = exports.chainW = exports.ioEither = exports.chainEitherK = exports.fromEitherK = exports.getFilterable = exports.getIOValidation = exports.bracket = exports.tryCatch = exports.getApplyMonoid = exports.getApplySemigroup = exports.getSemigroup = exports.swap = exports.orElse = exports.getOrElseW = exports.getOrElse = exports.fold = exports.leftIO = exports.rightIO = exports.right = exports.left = exports.URI = void 0;
var E = require("./Either");
var EitherT_1 = require("./EitherT");
var Filterable_1 = require("./Filterable");
var IO_1 = require("./IO");
var pipeable_1 = require("./pipeable");
var ValidationT_1 = require("./ValidationT");
var T = /*@__PURE__*/ EitherT_1.getEitherM(IO_1.io);
/**
 * @since 2.0.0
 */
exports.URI = 'IOEither';
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
exports.rightIO = T.rightM;
/**
 * @since 2.0.0
 */
exports.leftIO = T.leftM;
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
    return IO_1.getSemigroup(E.getSemigroup(S));
}
exports.getSemigroup = getSemigroup;
/**
 * Semigroup returning the left-most `Left` value. If both operands are `Right`s then the inner values
 * are appended using the provided `Semigroup`
 *
 * @since 2.0.0
 */
function getApplySemigroup(S) {
    return IO_1.getSemigroup(E.getApplySemigroup(S));
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
 * Constructs a new `IOEither` from a function that performs a side effect and might throw
 *
 * @since 2.0.0
 */
function tryCatch(f, onError) {
    return function () { return E.tryCatch(f, onError); };
}
exports.tryCatch = tryCatch;
/**
 * Make sure that a resource is cleaned up in the event of an exception (*). The release action is called regardless of
 * whether the body action throws (*) or returns.
 *
 * (*) i.e. returns a `Left`
 *
 * @since 2.0.0
 */
function bracket(acquire, use, release) {
    return T.chain(acquire, function (a) {
        return T.chain(IO_1.io.map(use(a), E.right), function (e) {
            return T.chain(release(a, e), function () { return (E.isLeft(e) ? T.left(e.left) : T.of(e.right)); });
        });
    });
}
exports.bracket = bracket;
/**
 * @since 2.0.0
 */
function getIOValidation(S) {
    var T = ValidationT_1.getValidationM(S, IO_1.io);
    return __assign(__assign({ _E: undefined }, exports.ioEither), T);
}
exports.getIOValidation = getIOValidation;
/**
 * @since 2.1.0
 */
function getFilterable(M) {
    var F = E.getWitherable(M);
    return __assign({ URI: exports.URI, _E: undefined }, Filterable_1.getFilterableComposition(IO_1.io, F));
}
exports.getFilterable = getFilterable;
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
exports.ioEither = {
    URI: exports.URI,
    bimap: T.bimap,
    mapLeft: T.mapLeft,
    map: T.map,
    of: exports.right,
    ap: T.ap,
    chain: T.chain,
    alt: T.alt,
    fromIO: exports.rightIO,
    throwError: exports.left
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.ioEither);
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

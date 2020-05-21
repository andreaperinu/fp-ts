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
exports.map = exports.flatten = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.taskSeq = exports.task = exports.chainIOK = exports.fromIOK = exports.of = exports.fromIO = exports.delay = exports.getRaceMonoid = exports.getMonoid = exports.getSemigroup = exports.never = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
var function_1 = require("./function");
/**
 * @since 2.0.0
 */
exports.URI = 'Task';
/**
 * @since 2.0.0
 */
exports.never = function () { return new Promise(function (_) { return undefined; }); };
/**
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return function () { return x().then(function (rx) { return y().then(function (ry) { return S.concat(rx, ry); }); }); }; }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * @since 2.0.0
 */
function getMonoid(M) {
    return {
        concat: getSemigroup(M).concat,
        empty: exports.task.of(M.empty)
    };
}
exports.getMonoid = getMonoid;
/**
 * Note: uses `Promise.race` internally
 *
 * @since 2.0.0
 */
function getRaceMonoid() {
    return {
        concat: function (x, y) { return function () { return Promise.race([x(), y()]); }; },
        empty: exports.never
    };
}
exports.getRaceMonoid = getRaceMonoid;
/**
 * @since 2.0.0
 */
function delay(millis) {
    return function (ma) { return function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // tslint:disable-next-line: no-floating-promises
                ma().then(resolve);
            }, millis);
        });
    }; };
}
exports.delay = delay;
/**
 * @since 2.0.0
 */
function fromIO(ma) {
    return function () { return Promise.resolve(ma()); };
}
exports.fromIO = fromIO;
/**
 * @since 2.0.0
 */
function of(a) {
    return function () { return Promise.resolve(a); };
}
exports.of = of;
/**
 * @since 2.4.0
 */
function fromIOK(f) {
    return function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return fromIO(f.apply(void 0, a));
    };
}
exports.fromIOK = fromIOK;
/**
 * @since 2.4.0
 */
function chainIOK(f) {
    return chain(fromIOK(f));
}
exports.chainIOK = chainIOK;
/**
 * @since 2.0.0
 */
exports.task = {
    URI: exports.URI,
    map: function (ma, f) { return function () { return ma().then(f); }; },
    of: of,
    ap: function (mab, ma) { return function () { return Promise.all([mab(), ma()]).then(function (_a) {
        var f = _a[0], a = _a[1];
        return f(a);
    }); }; },
    chain: function (ma, f) { return function () { return ma().then(function (a) { return f(a)(); }); }; },
    fromIO: fromIO,
    fromTask: function_1.identity
};
/**
 * Like `Task` but `ap` is sequential
 *
 * @since 2.0.0
 */
exports.taskSeq = __assign(__assign({}, exports.task), { ap: function (mab, ma) { return function () { return mab().then(function (f) { return ma().then(function (a) { return f(a); }); }); }; } });
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.task);
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
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
exports.flatten = flatten;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;

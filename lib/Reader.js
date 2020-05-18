"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promap = exports.map = exports.flatten = exports.compose = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.chainW = exports.reader = exports.of = exports.getMonoid = exports.getSemigroup = exports.local = exports.asks = exports.ask = exports.URI = void 0;
var E = require("./Either");
var function_1 = require("./function");
var Identity_1 = require("./Identity");
var ReaderT_1 = require("./ReaderT");
var pipeable_1 = require("./pipeable");
var T = /*@__PURE__*/ ReaderT_1.getReaderM(Identity_1.identity);
/**
 * @since 2.0.0
 */
exports.URI = 'Reader';
/**
 * Reads the current context
 *
 * @since 2.0.0
 */
exports.ask = T.ask;
/**
 * Projects a value from the global context in a Reader
 *
 * @since 2.0.0
 */
exports.asks = T.asks;
/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @since 2.0.0
 */
function local(f) {
    return function (ma) { return T.local(ma, f); };
}
exports.local = local;
/**
 * @since 2.0.0
 */
function getSemigroup(S) {
    return {
        concat: function (x, y) { return function (e) { return S.concat(x(e), y(e)); }; }
    };
}
exports.getSemigroup = getSemigroup;
/**
 * @since 2.0.0
 */
function getMonoid(M) {
    return {
        concat: getSemigroup(M).concat,
        empty: function () { return M.empty; }
    };
}
exports.getMonoid = getMonoid;
/**
 * @since 2.0.0
 */
exports.of = T.of;
/**
 * @since 2.0.0
 */
exports.reader = {
    URI: exports.URI,
    map: function (ma, f) { return function (e) { return f(ma(e)); }; },
    of: exports.of,
    ap: T.ap,
    chain: T.chain,
    promap: function (mbc, f, g) { return function (a) { return g(mbc(f(a))); }; },
    compose: function (ab, la) { return function (l) { return ab(la(l)); }; },
    id: function () { return function_1.identity; },
    first: function (pab) { return function (_a) {
        var a = _a[0], c = _a[1];
        return [pab(a), c];
    }; },
    second: function (pbc) { return function (_a) {
        var a = _a[0], b = _a[1];
        return [a, pbc(b)];
    }; },
    left: function (pab) {
        return E.fold(function (a) { return E.left(pab(a)); }, E.right);
    },
    right: function (pbc) {
        return E.fold(E.left, function (b) { return E.right(pbc(b)); });
    }
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.reader);
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
var compose = /*@__PURE__*/ (function () { return pipeables.compose; })();
exports.compose = compose;
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
exports.flatten = flatten;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var promap = /*@__PURE__*/ (function () { return pipeables.promap; })();
exports.promap = promap;
/**
 * @since 2.6.0
 */
exports.chainW = chain;

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
exports.reduceRight = exports.reduce = exports.mapLeft = exports.map = exports.foldMap = exports.extend = exports.duplicate = exports.compose = exports.bimap = exports.readonlyTuple = exports.getChainRec = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.swap = exports.snd = exports.fst = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
/**
 * @since 2.5.0
 */
exports.URI = 'ReadonlyTuple';
/**
 * @since 2.5.0
 */
function fst(sa) {
    return sa[0];
}
exports.fst = fst;
/**
 * @since 2.5.0
 */
function snd(sa) {
    return sa[1];
}
exports.snd = snd;
/**
 * @since 2.5.0
 */
function swap(sa) {
    return [snd(sa), fst(sa)];
}
exports.swap = swap;
/**
 * @since 2.5.0
 */
function getApply(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: exports.readonlyTuple.map,
        ap: function (fab, fa) { return [fst(fab)(fst(fa)), S.concat(snd(fab), snd(fa))]; }
    };
}
exports.getApply = getApply;
var of = function (M) { return function (a) {
    return [a, M.empty];
}; };
/**
 * @since 2.5.0
 */
function getApplicative(M) {
    return __assign(__assign({}, getApply(M)), { of: of(M) });
}
exports.getApplicative = getApplicative;
/**
 * @since 2.5.0
 */
function getChain(S) {
    return __assign(__assign({}, getApply(S)), { chain: function (fa, f) {
            var _a = f(fst(fa)), b = _a[0], s = _a[1];
            return [b, S.concat(snd(fa), s)];
        } });
}
exports.getChain = getChain;
/**
 * @since 2.5.0
 */
function getMonad(M) {
    return __assign(__assign({}, getChain(M)), { of: of(M) });
}
exports.getMonad = getMonad;
/**
 * @since 2.5.0
 */
function getChainRec(M) {
    var chainRec = function (a, f) {
        var result = f(a);
        var acc = M.empty;
        var s = fst(result);
        while (s._tag === 'Left') {
            acc = M.concat(acc, snd(result));
            result = f(s.left);
            s = fst(result);
        }
        return [s.right, M.concat(acc, snd(result))];
    };
    return __assign(__assign({}, getChain(M)), { chainRec: chainRec });
}
exports.getChainRec = getChainRec;
/**
 * @since 2.5.0
 */
exports.readonlyTuple = {
    URI: exports.URI,
    compose: function (ba, ae) { return [fst(ba), snd(ae)]; },
    map: function (ae, f) { return [f(fst(ae)), snd(ae)]; },
    bimap: function (fea, f, g) { return [g(fst(fea)), f(snd(fea))]; },
    mapLeft: function (fea, f) { return [fst(fea), f(snd(fea))]; },
    extract: fst,
    extend: function (ae, f) { return [f(ae), snd(ae)]; },
    reduce: function (ae, b, f) { return f(b, fst(ae)); },
    foldMap: function (_) { return function (ae, f) { return f(fst(ae)); }; },
    reduceRight: function (ae, b, f) { return f(fst(ae), b); },
    traverse: function (F) { return function (as, f) {
        return F.map(f(fst(as)), function (b) { return [b, snd(as)]; });
    }; },
    sequence: function (F) { return function (fas) {
        return F.map(fst(fas), function (a) { return [a, snd(fas)]; });
    }; }
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.readonlyTuple);
var bimap = /*@__PURE__*/ (function () { return pipeables.bimap; })();
exports.bimap = bimap;
var compose = /*@__PURE__*/ (function () { return pipeables.compose; })();
exports.compose = compose;
var duplicate = /*@__PURE__*/ (function () { return pipeables.duplicate; })();
exports.duplicate = duplicate;
var extend = /*@__PURE__*/ (function () { return pipeables.extend; })();
exports.extend = extend;
var foldMap = /*@__PURE__*/ (function () { return pipeables.foldMap; })();
exports.foldMap = foldMap;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var mapLeft = /*@__PURE__*/ (function () { return pipeables.mapLeft; })();
exports.mapLeft = mapLeft;
var reduce = /*@__PURE__*/ (function () { return pipeables.reduce; })();
exports.reduce = reduce;
var reduceRight = /*@__PURE__*/ (function () { return pipeables.reduceRight; })();
exports.reduceRight = reduceRight;

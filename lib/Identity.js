"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = exports.reduce = exports.map = exports.foldMap = exports.flatten = exports.extend = exports.duplicate = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.alt = exports.identity = exports.getEq = exports.getShow = exports.URI = void 0;
var ChainRec_1 = require("./ChainRec");
var function_1 = require("./function");
var pipeable_1 = require("./pipeable");
/**
 * @since 2.0.0
 */
exports.URI = 'Identity';
/**
 * @since 2.0.0
 */
exports.getShow = function_1.identity;
/**
 * @since 2.0.0
 */
exports.getEq = function_1.identity;
/**
 * @since 2.0.0
 */
exports.identity = {
    URI: exports.URI,
    map: function (ma, f) { return f(ma); },
    of: function_1.identity,
    ap: function (mab, ma) { return mab(ma); },
    chain: function (ma, f) { return f(ma); },
    reduce: function (fa, b, f) { return f(b, fa); },
    foldMap: function (_) { return function (fa, f) { return f(fa); }; },
    reduceRight: function (fa, b, f) { return f(fa, b); },
    traverse: function (F) { return function (ta, f) {
        return F.map(f(ta), function_1.identity);
    }; },
    sequence: function (F) { return function (ta) {
        return F.map(ta, function_1.identity);
    }; },
    alt: function_1.identity,
    extract: function_1.identity,
    extend: function (wa, f) { return f(wa); },
    chainRec: ChainRec_1.tailRec
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.identity);
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
var foldMap = /*@__PURE__*/ (function () { return pipeables.foldMap; })();
exports.foldMap = foldMap;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var reduce = /*@__PURE__*/ (function () { return pipeables.reduce; })();
exports.reduce = reduce;
var reduceRight = /*@__PURE__*/ (function () { return pipeables.reduceRight; })();
exports.reduceRight = reduceRight;

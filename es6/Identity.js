import { tailRec } from './ChainRec';
import { identity as id } from './function';
import { pipeable } from './pipeable';
/**
 * @since 2.0.0
 */
export var URI = 'Identity';
/**
 * @since 2.0.0
 */
export var getShow = id;
/**
 * @since 2.0.0
 */
export var getEq = id;
/**
 * @since 2.0.0
 */
export var identity = {
    URI: URI,
    map: function (ma, f) { return f(ma); },
    of: id,
    ap: function (mab, ma) { return mab(ma); },
    chain: function (ma, f) { return f(ma); },
    reduce: function (fa, b, f) { return f(b, fa); },
    foldMap: function (_) { return function (fa, f) { return f(fa); }; },
    reduceRight: function (fa, b, f) { return f(fa, b); },
    traverse: function (F) { return function (ta, f) {
        return F.map(f(ta), id);
    }; },
    sequence: function (F) { return function (ta) {
        return F.map(ta, id);
    }; },
    alt: id,
    extract: id,
    extend: function (wa, f) { return f(wa); },
    chainRec: tailRec
};
var pipeables = /*@__PURE__*/ pipeable(identity);
var alt = /*@__PURE__*/ (function () { return pipeables.alt; })();
var ap = /*@__PURE__*/ (function () { return pipeables.ap; })();
var apFirst = /*@__PURE__*/ (function () { return pipeables.apFirst; })();
var apSecond = /*@__PURE__*/ (function () { return pipeables.apSecond; })();
var chain = /*@__PURE__*/ (function () { return pipeables.chain; })();
var chainFirst = /*@__PURE__*/ (function () { return pipeables.chainFirst; })();
var duplicate = /*@__PURE__*/ (function () { return pipeables.duplicate; })();
var extend = /*@__PURE__*/ (function () { return pipeables.extend; })();
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
var foldMap = /*@__PURE__*/ (function () { return pipeables.foldMap; })();
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
var reduce = /*@__PURE__*/ (function () { return pipeables.reduce; })();
var reduceRight = /*@__PURE__*/ (function () { return pipeables.reduceRight; })();
export { 
/**
 * @since 2.0.0
 */
alt, 
/**
 * @since 2.0.0
 */
ap, 
/**
 * @since 2.0.0
 */
apFirst, 
/**
 * @since 2.0.0
 */
apSecond, 
/**
 * @since 2.0.0
 */
chain, 
/**
 * @since 2.0.0
 */
chainFirst, 
/**
 * @since 2.0.0
 */
duplicate, 
/**
 * @since 2.0.0
 */
extend, 
/**
 * @since 2.0.0
 */
flatten, 
/**
 * @since 2.0.0
 */
foldMap, 
/**
 * @since 2.0.0
 */
map, 
/**
 * @since 2.0.0
 */
reduce, 
/**
 * @since 2.0.0
 */
reduceRight };

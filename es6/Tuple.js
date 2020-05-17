import { pipeable } from './pipeable';
import * as RT from './ReadonlyTuple';
/**
 * @since 2.0.0
 */
export var URI = 'Tuple';
/**
 * @since 2.0.0
 */
export var fst = RT.fst;
/**
 * @since 2.0.0
 */
export var snd = RT.snd;
/**
 * @since 2.0.0
 */
export var swap = RT.swap;
/**
 * @since 2.0.0
 */
export var getApply = RT.getApply;
/**
 * @since 2.0.0
 */
export var getApplicative = RT.getApplicative;
/**
 * @since 2.0.0
 */
export var getChain = RT.getChain;
/**
 * @since 2.0.0
 */
export var getMonad = RT.getMonad;
/**
 * @since 2.0.0
 */
export var getChainRec = RT.getChainRec;
/**
 * @since 2.0.0
 */
export var tuple = {
    URI: URI,
    compose: RT.readonlyTuple.compose,
    map: RT.readonlyTuple.map,
    bimap: RT.readonlyTuple.bimap,
    mapLeft: RT.readonlyTuple.mapLeft,
    extract: fst,
    extend: RT.readonlyTuple.extend,
    reduce: RT.readonlyTuple.reduce,
    foldMap: RT.readonlyTuple.foldMap,
    reduceRight: RT.readonlyTuple.reduceRight,
    traverse: RT.readonlyTuple.traverse,
    sequence: RT.readonlyTuple.sequence
};
var pipeables = /*@__PURE__*/ pipeable(tuple);
var bimap = /*@__PURE__*/ (function () { return pipeables.bimap; })();
var compose = /*@__PURE__*/ (function () { return pipeables.compose; })();
var duplicate = /*@__PURE__*/ (function () { return pipeables.duplicate; })();
var extend = /*@__PURE__*/ (function () { return pipeables.extend; })();
var foldMap = /*@__PURE__*/ (function () { return pipeables.foldMap; })();
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
var mapLeft = /*@__PURE__*/ (function () { return pipeables.mapLeft; })();
var reduce = /*@__PURE__*/ (function () { return pipeables.reduce; })();
var reduceRight = /*@__PURE__*/ (function () { return pipeables.reduceRight; })();
export { 
/**
 * @since 2.0.0
 */
bimap, 
/**
 * @since 2.0.0
 */
compose, 
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
foldMap, 
/**
 * @since 2.0.0
 */
map, 
/**
 * @since 2.0.0
 */
mapLeft, 
/**
 * @since 2.0.0
 */
reduce, 
/**
 * @since 2.0.0
 */
reduceRight };

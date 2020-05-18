"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = exports.reduce = exports.mapLeft = exports.map = exports.foldMap = exports.extend = exports.duplicate = exports.compose = exports.bimap = exports.tuple = exports.getChainRec = exports.getMonad = exports.getChain = exports.getApplicative = exports.getApply = exports.swap = exports.snd = exports.fst = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
var RT = require("./ReadonlyTuple");
/**
 * @since 2.0.0
 */
exports.URI = 'Tuple';
/**
 * @since 2.0.0
 */
exports.fst = RT.fst;
/**
 * @since 2.0.0
 */
exports.snd = RT.snd;
/**
 * @since 2.0.0
 */
exports.swap = RT.swap;
/**
 * @since 2.0.0
 */
exports.getApply = RT.getApply;
/**
 * @since 2.0.0
 */
exports.getApplicative = RT.getApplicative;
/**
 * @since 2.0.0
 */
exports.getChain = RT.getChain;
/**
 * @since 2.0.0
 */
exports.getMonad = RT.getMonad;
/**
 * @since 2.0.0
 */
exports.getChainRec = RT.getChainRec;
/**
 * @since 2.0.0
 */
exports.tuple = 
/*@__PURE__*/
(function () { return Object.assign({}, RT.readonlyTuple, { URI: exports.URI }); })();
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.tuple);
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

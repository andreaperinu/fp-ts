"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.flatten = exports.chainFirst = exports.chain = exports.apSecond = exports.apFirst = exports.ap = exports.state = exports.of = exports.gets = exports.modify = exports.put = exports.get = exports.execState = exports.evalState = exports.URI = void 0;
var StateT_1 = require("./StateT");
var Identity_1 = require("./Identity");
var pipeable_1 = require("./pipeable");
var T = /*@__PURE__*/ StateT_1.getStateM(Identity_1.identity);
/**
 * @since 2.0.0
 */
exports.URI = 'State';
/* tslint:enable:readonly-array */
/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.0.0
 */
exports.evalState = T.evalState;
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.0.0
 */
exports.execState = T.execState;
/**
 * Get the current state
 *
 * @since 2.0.0
 */
exports.get = T.get;
/**
 * Set the state
 *
 * @since 2.0.0
 */
exports.put = T.put;
/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 */
exports.modify = T.modify;
/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 */
exports.gets = T.gets;
/**
 * @since 2.0.0
 */
exports.of = T.of;
/**
 * @since 2.0.0
 */
exports.state = {
    URI: exports.URI,
    map: T.map,
    of: exports.of,
    ap: T.ap,
    chain: T.chain
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.state);
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

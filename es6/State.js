import { getStateM } from './StateT';
import { identity } from './Identity';
import { pipeable } from './pipeable';
var T = getStateM(identity);
/**
 * @since 2.0.0
 */
export var URI = 'State';
/* tslint:enable:readonly-array */
/**
 * Run a computation in the `State` monad, discarding the final state
 *
 * @since 2.0.0
 */
export var evalState = T.evalState;
/**
 * Run a computation in the `State` monad discarding the result
 *
 * @since 2.0.0
 */
export var execState = T.execState;
/**
 * Get the current state
 *
 * @since 2.0.0
 */
export var get = T.get;
/**
 * Set the state
 *
 * @since 2.0.0
 */
export var put = T.put;
/**
 * Modify the state by applying a function to the current state
 *
 * @since 2.0.0
 */
export var modify = T.modify;
/**
 * Get a value which depends on the current state
 *
 * @since 2.0.0
 */
export var gets = T.gets;
/**
 * @since 2.0.0
 */
export var of = T.of;
/**
 * @since 2.0.0
 */
export var state = {
    URI: URI,
    map: T.map,
    of: of,
    ap: T.ap,
    chain: T.chain
};
var pipeables = /*@__PURE__*/ pipeable(state);
var ap = /*@__PURE__*/ (function () { return pipeables.ap; })();
var apFirst = /*@__PURE__*/ (function () { return pipeables.apFirst; })();
var apSecond = /*@__PURE__*/ (function () { return pipeables.apSecond; })();
var chain = /*@__PURE__*/ (function () { return pipeables.chain; })();
var chainFirst = /*@__PURE__*/ (function () { return pipeables.chainFirst; })();
var flatten = /*@__PURE__*/ (function () { return pipeables.flatten; })();
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
export { 
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
flatten, 
/**
 * @since 2.0.0
 */
map };

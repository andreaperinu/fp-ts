"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separate = exports.compact = exports.partitionMap = exports.partition = exports.map = exports.filterMap = exports.filter = exports.map_ = exports.getWitherable = exports.getFilterableWithIndex = exports.fromFoldable = exports.singleton = exports.getMonoid = exports.getEq = exports.empty = exports.isSubmap = exports.lookup = exports.lookupWithKey = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.insertAt = exports.toUnfoldable = exports.toArray = exports.collect = exports.values = exports.keys = exports.elem = exports.member = exports.isEmpty = exports.size = exports.getShow = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
var RM = require("./ReadonlyMap");
/**
 * @since 2.0.0
 */
exports.URI = 'Map';
/**
 * @since 2.0.0
 */
exports.getShow = RM.getShow;
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.0.0
 */
exports.size = RM.size;
/**
 * Test whether or not a map is empty
 *
 * @since 2.0.0
 */
exports.isEmpty = RM.isEmpty;
/**
 * Test whether or not a key exists in a map
 *
 * @since 2.0.0
 */
exports.member = RM.member;
/**
 * Test whether or not a value is a member of a map
 *
 * @since 2.0.0
 */
exports.elem = RM.elem;
/**
 * Get a sorted array of the keys contained in a map
 *
 * @since 2.0.0
 */
exports.keys = RM.keys;
/**
 * Get a sorted array of the values contained in a map
 *
 * @since 2.0.0
 */
exports.values = RM.values;
/**
 * @since 2.0.0
 */
exports.collect = RM.collect;
/**
 * Get a sorted of the key/value pairs contained in a map
 *
 * @since 2.0.0
 */
exports.toArray = RM.toReadonlyArray;
function toUnfoldable(O, U) {
    return RM.toUnfoldable(O, U);
}
exports.toUnfoldable = toUnfoldable;
/**
 * Insert or replace a key/value pair in a map
 *
 * @since 2.0.0
 */
exports.insertAt = RM.insertAt;
/**
 * Delete a key and value from a map
 *
 * @since 2.0.0
 */
exports.deleteAt = RM.deleteAt;
/**
 * @since 2.0.0
 */
exports.updateAt = RM.updateAt;
/**
 * @since 2.0.0
 */
exports.modifyAt = RM.modifyAt;
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.0.0
 */
exports.pop = RM.pop;
/**
 * Lookup the value for a key in a `Map`.
 * If the result is a `Some`, the existing key is also returned.
 *
 * @since 2.0.0
 */
exports.lookupWithKey = RM.lookupWithKey;
/**
 * Lookup the value for a key in a `Map`.
 *
 * @since 2.0.0
 */
exports.lookup = RM.lookup;
/**
 * Test whether or not one Map contains all of the keys and values contained in another Map
 *
 * @since 2.0.0
 */
exports.isSubmap = RM.isSubmap;
/**
 * @since 2.0.0
 */
exports.empty = new Map();
/**
 * @since 2.0.0
 */
exports.getEq = RM.getEq;
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @since 2.0.0
 */
exports.getMonoid = RM.getMonoid;
/**
 * Create a map with one key/value pair
 *
 * @since 2.0.0
 */
exports.singleton = RM.singleton;
function fromFoldable(E, M, F) {
    return RM.fromFoldable(E, M, F);
}
exports.fromFoldable = fromFoldable;
/**
 * @since 2.0.0
 */
exports.getFilterableWithIndex = RM.getFilterableWithIndex;
/**
 * @since 2.0.0
 */
exports.getWitherable = RM.getWitherable;
/**
 * @since 2.0.0
 */
exports.map_ = 
/*@__PURE__*/
(function () { return Object.assign({}, RM.readonlyMap, { URI: exports.URI }); })();
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.map_);
var filter = /*@__PURE__*/ (function () { return pipeables.filter; })();
exports.filter = filter;
var filterMap = /*@__PURE__*/ (function () { return pipeables.filterMap; })();
exports.filterMap = filterMap;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;
var partition = /*@__PURE__*/ (function () { return pipeables.partition; })();
exports.partition = partition;
var partitionMap = /*@__PURE__*/ (function () { return pipeables.partitionMap; })();
exports.partitionMap = partitionMap;
var compact = /*@__PURE__*/ (function () { return pipeables.compact; })();
exports.compact = compact;
var separate = /*@__PURE__*/ (function () { return pipeables.separate; })();
exports.separate = separate;

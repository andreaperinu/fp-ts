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
exports.map = exports.contramap = exports.const_ = exports.getApplicative = exports.getApply = exports.getBooleanAlgebra = exports.getHeytingAlgebra = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBounded = exports.getOrd = exports.getEq = exports.getShow = exports.make = exports.URI = void 0;
var function_1 = require("./function");
var pipeable_1 = require("./pipeable");
/**
 * @since 2.0.0
 */
exports.URI = 'Const';
/**
 * @since 2.0.0
 */
exports.make = function_1.unsafeCoerce;
/**
 * @since 2.0.0
 */
function getShow(S) {
    return {
        show: function (c) { return "make(" + S.show(c) + ")"; }
    };
}
exports.getShow = getShow;
/**
 * @since 2.0.0
 */
exports.getEq = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getOrd = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getBounded = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getSemigroup = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getMonoid = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getSemiring = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getRing = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getHeytingAlgebra = function_1.identity;
/**
 * @since 2.6.0
 */
exports.getBooleanAlgebra = function_1.identity;
/**
 * @since 2.0.0
 */
function getApply(S) {
    return {
        URI: exports.URI,
        _E: undefined,
        map: exports.const_.map,
        ap: function (fab, fa) { return exports.make(S.concat(fab, fa)); }
    };
}
exports.getApply = getApply;
/**
 * @since 2.0.0
 */
function getApplicative(M) {
    return __assign(__assign({}, getApply(M)), { of: function () { return exports.make(M.empty); } });
}
exports.getApplicative = getApplicative;
/**
 * @since 2.0.0
 */
exports.const_ = {
    URI: exports.URI,
    map: function_1.unsafeCoerce,
    contramap: function_1.unsafeCoerce,
    bimap: function (fea, f) { return exports.make(f(fea)); },
    mapLeft: function (fea, f) { return exports.make(f(fea)); }
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.const_);
var contramap = /*@__PURE__*/ (function () { return pipeables.contramap; })();
exports.contramap = contramap;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;

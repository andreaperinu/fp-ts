"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.extend = exports.duplicate = exports.store = exports.experiment = exports.peeks = exports.seeks = exports.seek = exports.URI = void 0;
var pipeable_1 = require("./pipeable");
/**
 * @since 2.0.0
 */
exports.URI = 'Store';
/**
 * Reposition the focus at the specified position
 *
 * @since 2.0.0
 */
function seek(s) {
    return function (wa) { return ({ peek: wa.peek, pos: s }); };
}
exports.seek = seek;
/**
 * Reposition the focus at the specified position, which depends on the current position
 *
 * @since 2.0.0
 */
function seeks(f) {
    return function (wa) { return ({ peek: wa.peek, pos: f(wa.pos) }); };
}
exports.seeks = seeks;
/**
 * Extract a value from a position which depends on the current position
 *
 * @since 2.0.0
 */
function peeks(f) {
    return function (wa) { return wa.peek(f(wa.pos)); };
}
exports.peeks = peeks;
function experiment(F) {
    return function (f) { return function (wa) { return F.map(f(wa.pos), function (s) { return wa.peek(s); }); }; };
}
exports.experiment = experiment;
/**
 * @since 2.0.0
 */
exports.store = {
    URI: exports.URI,
    map: function (wa, f) { return ({
        peek: function (s) { return f(wa.peek(s)); },
        pos: wa.pos
    }); },
    extract: function (wa) { return wa.peek(wa.pos); },
    extend: function (wa, f) { return ({
        peek: function (s) { return f({ peek: wa.peek, pos: s }); },
        pos: wa.pos
    }); }
};
var pipeables = /*@__PURE__*/ pipeable_1.pipeable(exports.store);
var duplicate = /*@__PURE__*/ (function () { return pipeables.duplicate; })();
exports.duplicate = duplicate;
var extend = /*@__PURE__*/ (function () { return pipeables.extend; })();
exports.extend = extend;
var map = /*@__PURE__*/ (function () { return pipeables.map; })();
exports.map = map;

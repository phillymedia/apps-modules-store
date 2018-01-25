"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = require("./get");

var _get2 = _interopRequireDefault(_get);

var _get3 = require("./legacy/v1/get");

var _get4 = _interopRequireDefault(_get3);

var _set = require("./set");

var _set2 = _interopRequireDefault(_set);

var _set3 = require("./legacy/v1/set");

var _set4 = _interopRequireDefault(_set3);

var _remove = require("./remove");

var _remove2 = _interopRequireDefault(_remove);

var _remove3 = require("./legacy/v1/remove");

var _remove4 = _interopRequireDefault(_remove3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

// DEPENDENCIES
// =============================================================================

exports.default = {
	get: _get2.default,
	getV1: _get4.default,
	set: _set2.default,
	setV1: _set4.default,
	remove: _remove2.default,
	removeV1: _remove4.default
};
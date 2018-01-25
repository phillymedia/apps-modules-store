"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = require("./get");

var _get2 = _interopRequireDefault(_get);

var _set = require("./set");

var _set2 = _interopRequireDefault(_set);

var _remove = require("./remove");

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

exports.default = {
	get: _get2.default,
	set: _set2.default,
	remove: _remove2.default
}; // DEPENDENCIES
// =============================================================================
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

// EXPORTS
// =============================================================================

exports.default = {
	add: _set2.default.add,
	get: _get2.default.all,
	getByHint: _get2.default.byHint,
	remove: _remove2.default.all,
	removeByArn: _remove2.default.byArn
}; // DEPENDENCIES
// =============================================================================
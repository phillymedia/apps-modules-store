"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _add = require("./add");

var _find = require("./find");

var _remove = require("./remove");

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORTS
// =============================================================================

exports.default = {
	add: _add.add,
	addMany: _add.addMany,
	exists: _find.exists,
	findByParam: _find.findByParam,
	findAll: _find.findAll,
	findByArn: _find.findByArn,
	findByAttribute: _find.findByAttribute,
	findByHint: _find.findByHint,
	remove: _remove2.default
}; // DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
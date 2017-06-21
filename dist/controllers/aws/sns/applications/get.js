"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
var _schema = _db.db.model("Application");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of applications.
 *
 * @method all
 * @param {function} callback
 */

// sub-modules
function all(callback) {
	// schema
	var settings = {
		schema: _schema
	};
	// get the app, if it's in oure store
	return _core2.default.findAll(settings, callback);
}

/**
 * Get app from hint.
 *
 * @method byHint
 * @param {string} appHint
 * @param {function} callback
 */
function byHint(appHint, callback) {
	// settings
	var settings = {
		schema: _schema,
		hint: appHint,
		field: "arn"
	};
	// get the app, if it's in oure store
	return _core2.default.findByHint(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = {
	all: all,
	byHint: byHint
};
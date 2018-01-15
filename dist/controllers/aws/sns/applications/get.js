"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.byHint = exports.all = undefined;

var _lodash = require("lodash");

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model

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
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
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
	return _core2.default.findByHint(settings, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		if (!(0, _lodash.isEmpty)(data)) {
			data = data[0];
		}
		// pass back
		return callback(null, data);
	});
}

// EXPORTS
// =============================================================================

exports.all = all;
exports.byHint = byHint;
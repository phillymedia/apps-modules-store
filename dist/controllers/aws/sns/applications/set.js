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
 * Add an SNS application to the list.
 *
 * @method addApplicationremove.js
 * @param {object} application
 * @param {function} callback
 */

// sub-modules
function add(application, callback) {
	// settings
	var settings = {
		schema: _schema,
		arn: application.PlatformApplicationArn,
		attributes: application.Attributes
	};
	// get the app, if it's in oure store
	return _core2.default.add(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = {
	add: add
};
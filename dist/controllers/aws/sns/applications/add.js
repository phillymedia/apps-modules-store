"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addMany = exports.add = undefined;

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
 * @method add
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

/**
 * Add to store.
 *
 * @method addMany
 * @param {array} contents 					Data to store.
 * @param {function} callback				A callback function.
 * @return {function} core.addMany			The shared setter.
 */
function addMany(contents, callback) {
	// settings
	var settings = {
		schema: _schema,
		map: {
			arn: "PlatformApplicationArn",
			attributes: "Attributes"
		}
	};
	// we have to do an async map on the other side,
	// so let's not also do it here -- pulling ID from
	// content at the same time as everything else
	return _core2.default.addMany(settings, contents, callback);
}

// EXPORTS
// =============================================================================

exports.add = add;
exports.addMany = addMany;
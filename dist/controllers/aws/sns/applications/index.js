"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of applications.
 *
 * @method getApplications
 * @param {function} callback
 */
function getApplications(callback) {
	// get the app, if it's in oure store
	return _core2.default.findAll(callback);
}

/**
 * Get app ARN from hint.
 *
 * @method getApplicationByHint
 * @param {string} appHint
 * @param {function} callback
 */
// DEPENDENCIES
// =============================================================================
function getApplicationByHint(appHint, callback) {
	// settings
	var settings = {
		hint: appHint,
		field: "arn"
	};
	// get the app, if it's in oure store
	return _core2.default.findByHint(settings, callback);
}

/**
 * Add an SNS application to the list.
 *
 * @method addApplication
 * @param {object} application
 * @param {function} callback
 */
function addApplication(application, callback) {
	// settings
	var settings = {
		hint: application
	};
	// get the app, if it's in oure store
	return _core2.default.add(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = {
	addApplication: addApplication,
	getApplications: getApplications,
	getApplicationByHint: getApplicationByHint
};
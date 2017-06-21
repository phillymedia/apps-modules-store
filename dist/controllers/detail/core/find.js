"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.exists = exports.findOne = undefined;

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get item(s).
 *
 * @method findOne
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
function findOne(settings, callback) {
	// set up parameters
	var params = {
		id: settings.id
	};
	// find a document!
	_core2.default.findOne(_schema3.default, params, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// if data...
		if (data && data.content) {
			// otherwise...
			return callback(null, data.content);
		}
		// otherwise...
		return callback(null, false);
	});
}

/**
 * Does an item already exist?
 *
 * @method exists
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */

// model
function exists(settings, callback) {
	// set up parameters
	var params = {
		id: settings.id
	};
	// search
	_core2.default.exists(_schema3.default, params, callback);
}

// EXPORTS
// =============================================================================

exports.findOne = findOne;
exports.exists = exists;
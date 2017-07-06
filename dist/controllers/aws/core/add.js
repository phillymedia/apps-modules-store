"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addMany = exports.add = undefined;

var _lodash = require("lodash");

var _async = require("async");

var _config = require("../../../config");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _find = require("./find");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method add
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */

// sub-modules
function add(settings, callback) {
	// pop off schema
	var schema = settings.schema;
	// remove skip from params
	(0, _lodash.unset)(settings, ["schema"]);
	// insert document
	_core2.default.add(schema, settings, function (err, data) {
		// handle errors
		if (err) {
			// duplicate entry -- fall through!
			if (err.code === _config.database.errors.duplicate) {
				// set arn to hint
				settings.hint = settings.arn;
				// find by hint/arn
				return (0, _find.findByHint)(settings, callback);
			}
			// otherwise, pass error back
			return callback(err);
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
 * Insert a new item.
 *
 * @method addMany
 * @param {object} settings				Settings.
 * @param {array} documents				Array of documents to format and insert.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */

// APP -------------------------------
// config
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
function addMany(settings, documents, callback) {
	// the database should be empty at this point...
	// peel off and add each ID
	(0, _async.map)(documents, function (document, next) {
		// settings
		var params = {};
		// use settings map
		if (settings.map) {
			(0, _lodash.forEach)(settings.map, function (value, key) {
				// arn: document.PlatformApplicationArn
				params[key] = document[value];
			});
		}
		// optional username
		if (settings.username) {
			params.username = settings.username;
		}
		// add to array
		return next(null, params);
	},
	// done!
	function (mapErr, mapped) {
		// handle errors
		if (mapErr) {
			return callback(mapErr);
		}
		// otherwise...
		return _core2.default.addMany(settings.schema, mapped, function (err, data) {
			// handle errors
			if (err) {
				return callback(err);
			}
			// otherwise...
			return callback(null, data);
		});
	});
}

// EXPORTS
// =============================================================================

exports.add = add;
exports.addMany = addMany;
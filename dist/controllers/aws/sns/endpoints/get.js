"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.byUsername = exports.byToken = exports.byArn = exports.all = undefined;

var _lodash = require("lodash");

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model

// APP -------------------------------
var _schema = _db.db.model("Endpoint");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of endpoints.
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
 * Get endpoint from ARN.
 *
 * @method byArn
 * @param {string} arn
 * @param {function} callback
 */
function byArn(arn, callback) {
	// settings
	var settings = {
		schema: _schema,
		arn: arn
	};
	// get the app, if it's in oure store
	return _core2.default.findByArn(settings, function (err, data) {
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

/**
 * Get endpoint from token.
 *
 * @method byToken
 * @param {string} appHint
 * @param {function} callback
 */
function byToken(token, callback) {
	// settings
	var settings = {
		schema: _schema,
		attr: token,
		field: "Token"
	};
	// get the app, if it's in oure store
	return _core2.default.findByAttribute(settings, function (err, data) {
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

/**
 * Get endpoint from username.
 *
 * @method byUsername
 * @param {string} username
 * @param {function} callback
 */
function byUsername(username, callback) {
	// settings
	var settings = {
		schema: _schema,
		attr: username,
		field: "CustomUserData"
	};
	// get the app, if it's in oure store
	return _core2.default.findByAttribute(settings, callback);
}

// EXPORTS
// =============================================================================

exports.all = all;
exports.byArn = byArn;
exports.byToken = byToken;
exports.byUsername = byUsername;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findAll = exports.findByHint = exports.find = exports.exists = undefined;

var _lodash = require("lodash");

var _logging = require("../../logging");

var _logging2 = _interopRequireDefault(_logging);

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Does an item already exist?
 *
 * @method exists
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */

// APP -------------------------------
// logging
function exists(settings, callback) {
	// set up parameters
	var params = {
		arn: settings.arn
	};
	// search
	_core2.default.exists(settings.schema, params, callback);
}

/**
 * Get item(s).
 *
 * @method find
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */

// sub-modules
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
function find(settings, callback) {
	// set up parameters
	var params = {
		arn: settings.arn,
		attributes: settings.attributes,
		limit: 1
	};
	// find a document!
	_core2.default.find(settings.schema, params, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// mongoose always returns an array, but there should only be one item
		// so, peel off content
		if (!(0, _lodash.isEmpty)(data)) {
			data = data[0];
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
 * Get all item(s).
 *
 * @method findAll
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findAll(settings, callback) {
	// find a document!
	_core2.default.find(settings.schema, {}, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
 * Get an item by hint.
 *
 * @method findByHint
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findByHint(settings, callback) {
	// turn the hint into a regular expression
	var hintEx = new RegExp(settings.hint, "gi");
	// find the item
	_core2.default.find(settings.schema, { arn: hintEx }, function (err, data) {
		if (err) {
			return callback(err);
		}
		// mongoose always returns an array, but there should only be one item
		// so, peel off content
		if (!(0, _lodash.isEmpty)(data)) {
			data = data[0];
		}
		// otherwise...
		_logging2.default.debug("Finding by hint...", data);
		// continue
		return callback(null, data);
	});
}

// EXPORTS
// =============================================================================

exports.exists = exists;
exports.find = find;
exports.findByHint = findByHint;
exports.findAll = findAll;
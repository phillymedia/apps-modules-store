"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findByParam = exports.findByHint = exports.findByAttribute = exports.findByArn = exports.findAll = exports.exists = undefined;

var _logging = require("../../logging");

var _logging2 = _interopRequireDefault(_logging);

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // DEPENDENCIES
// =============================================================================
// APP -------------------------------
// logging

// sub-modules


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
function exists(settings, callback) {
	// set up parameters
	var params = {
		arn: settings.arn
	};
	// search
	_core2.default.exists(settings.schema, params, callback);
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
	_core2.default.find(settings.schema, _defineProperty({}, settings.field, hintEx), function (err, data) {
		if (err) {
			return callback(err);
		}
		// otherwise...
		_logging2.default.debug("Finding by hint...", data);
		// continue
		return callback(null, data);
	});
}

/**
 * Get an item by arn.
 *
 * @method findByArn
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findByArn(settings, callback) {
	// find the item
	_core2.default.find(settings.schema, { arn: settings.arn }, function (err, data) {
		if (err) {
			return callback(err);
		}
		// otherwise...
		_logging2.default.debug("Finding by hint...", data);
		// continue
		return callback(null, data);
	});
}

/**
 * Get item by top-level parameter.
 *
 * @method findByParam
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findByParam(settings, callback) {
	// find the item
	_core2.default.find(settings.schema, _defineProperty({}, settings.field, settings.param), function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
 * Get an item by nested attribute.
 *
 * @method findByAttribute
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findByAttribute(settings, callback) {
	var attr = "attributes." + settings.field;
	// find the item
	_core2.default.find(settings.schema, _defineProperty({}, attr, settings.attr), function (err, data) {
		if (err) {
			return callback(err);
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
exports.findAll = findAll;
exports.findByArn = findByArn;
exports.findByAttribute = findByAttribute;
exports.findByHint = findByHint;
exports.findByParam = findByParam;
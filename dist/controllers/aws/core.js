"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require("lodash");

var _config = require("../../config");

var _logging = require("../logging");

var _logging2 = _interopRequireDefault(_logging);

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get an item by hint.
 *
 * @method findByHint
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */

// logging
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
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

/**
 * Get all item(s).
 *
 * @method findAll
 * @param {function} callback		Returns error or result
 * @return {function}
 */

// sub-modules

// APP -------------------------------
// config
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
 * Get item(s).
 *
 * @method find
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
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
 * Insert a new item.
 *
 * @method add
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function add(settings, callback) {
	// set up parameters
	var params = {
		arn: settings.arn,
		attributes: settings.attributes
	};
	// insert document
	_core2.default.add(settings.schema, params, function (err, data) {
		// handle errors
		if (err) {
			// duplicate entry -- fall through!
			if (err.code === _config.database.errors.duplicate) {
				// set arn to hint
				settings.hint = settings.arn;
				// find by hint/arn
				return findByHint(settings, callback);
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
 * @method remove
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function remove(settings, callback) {
	// set up parameters
	var params = {};
	// add arn if it exists...
	if (settings.arn) {
		params.arn = settings.arn;
	}
	// remove document
	_core2.default.remove(settings.schema, params, callback);
}

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

// EXPORTS
// =============================================================================

exports.default = {
	find: find,
	findByHint: findByHint,
	findAll: findAll,
	add: add,
	remove: remove,
	exists: exists
};
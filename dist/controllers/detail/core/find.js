"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.exists = exports.findOne = exports.findMany = undefined;

var _lodash = require("lodash");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get items.
 *
 * @method findMany
 * @param {object} settings
 * @param {function} callback
 * @return {function}
 */

// APP -------------------------------
// sub-modules
function findMany(settings, callback) {
	// only use findMany for arrays!
	if (!(0, _lodash.isArray)(settings.id)) {
		return findOne(settings, callback);
	}
	// set up parameters
	var params = {
		id: {
			$in: settings.id
		}
	};
	// find a document!
	return _core2.default.find(_schema3.default, params, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// if data...
		if ((0, _lodash.isEmpty)(data)) {
			// otherwise...
			return callback(null, false);
		}
		// otherwise...
		return callback(null, (0, _lodash.map)(data, function (datum) {
			return datum.content;
		}));
	});
}

/**
 * Get item.
 *
 * @method findOne
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */

// model
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
function findOne(settings, callback) {
	// don't use findOne on arrays!
	if ((0, _lodash.isArray)(settings.id)) {
		return findMany(settings, callback);
	}
	// set up parameters
	var params = {
		id: settings.id
	};
	// find a document!
	return _core2.default.findOne(_schema3.default, params, function (err, data) {
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

exports.findMany = findMany;
exports.findOne = findOne;
exports.exists = exists;
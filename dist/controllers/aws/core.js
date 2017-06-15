"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _logging = require("../logging");

var _logging2 = _interopRequireDefault(_logging);

var _app = require("../../app");

var _app2 = _interopRequireDefault(_app);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sub-modules
/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// logging
var core = require("../core");
// pcSns
// const sns = app.sns;
// database

// APP -------------------------------
var db = _app2.default.db;
// model
var _schema = db.model("Feed");

// THIRD PARTY LIBRARIES -------------------------------
// amazon web services
// const aws = require("aws-sdk");
// this library calls AWS directly, because we're working with such big
// data sets that it isn't performat to use pcSNS. We need paged data
// sets.

// asyncronous functionality (async.each, etc) for performance
// const async = require("async");


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
function findByHint(settings, callback) {
	// turn the hint into a regular expression
	var hintEx = new RegExp(settings.hint, "gi");
	// find the item
	core.find(_schema, { arn: hintEx }, function (err, data) {
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
 * Get all item(s).
 *
 * @method findAll
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function findAll(callback) {
	// find a document!
	core.find(_schema, {}, function (err, data) {
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
	core.find(_schema, params, function (err, data) {
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
	core.add(_schema, params, function (err, data) {
		// handle errors
		if (err) {
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
	var params = {
		arn: settings.arn
	};
	// insert document
	core.remove(_schema, params, callback);
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
	core.exists(_schema, params, callback);
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
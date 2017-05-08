"use strict";

/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for stats-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
var app = require("../../app");
// helpers
var helpers = require("philly-helpers");
// config
// const conf = require("APP/config");
// sub-modules
var core = require("../core");
// pcSns
// const sns = app.sns;
// database
var db = app.db;
// model
var _schema = db.model("Stat");

// THIRD PARTY LIBRARIES -------------------------------
// lodash

var _require = require("lodash"),
    isEmpty = _require.isEmpty;

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
// const _debug = conf.debug;


/**
* PRIVATE PROPERTIES
* const _privateBar;
**/

/**
* PRIVATE METHODS
* function _privateBar(){ var self = this; return this.foo; }
**/

/**
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
**/

/**
* Get item(s).
*
* @method find
* @param {Object} req				Original request.
* @param {Function} callback		Returns error or result
* @return {Function}
*/


function find(settings, callback) {
	// set up parameters
	var params = {
		name: settings.name,
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
		if (!isEmpty(data)) {
			data = data[0].content;
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
* Insert a new item.
*
* @method add
* @param {Object} req				Original request.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function add(settings, callback) {
	// set up parameters
	var params = {
		expireAt: helpers.minutesFromNow(settings.delay),
		name: settings.name,
		content: settings.content
	};
	// insert document
	core.add(_schema, params, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		return callback(null, data.content);
	});
}

/**
* Does an item already exist?
*
* @method exists
* @param {Object} settings			Request settings.
* @param {Function} callback		A callback function.
* @return {Object} 					Returns error object on failure, null on success.
*/
function exists(settings, callback) {
	// set up parameters
	var params = {
		name: settings.name
	};
	// search
	core.exists(_schema, params, callback);
}

/**
* Clear out items.
*
* @method remove
* @param {Object} settings			Request settings.
* @param {Function} callback		A callback function.
* @return {Object} 					Returns error object on failure, null on success.
*/
function remove(settings, callback) {
	// set up parameters
	var params = {
		name: settings.name
	};
	// remove
	core.remove(_schema, params, callback);
}

/**
* EXPORT THE FINISHED CLASS
* module.exports = className;
**/

module.exports = {
	find: find,
	add: add,
	remove: remove,
	exists: exists
};
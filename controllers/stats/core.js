/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for stats-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
// const conf = require("../../config");
// helpers
const helpers = require("helpers");
// main core
const core = require("./core");

// third-party libraries
// utilities
const _ = require("lodash");
// database
const db = require("mongoose");
// model
const _schema = db.model("Stat");


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
	const params = {
		name: settings.name,
		limit: 1,
	};
	// find a document!
	core.find(_schema, params, (err, data) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// mongoose always returns an array, but there should only be one item
		// so, peel off content
		if (!_.isEmpty(data)) {
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
	const params = {
		expireAt: helpers.minutesFromNow(settings.delay),
		name: settings.name,
		content: settings.content,
	};
	// insert document
	core.add(_schema, params, (err, data) => {
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
	const params = {
		name: settings.name,
	};
	// search
	core.exists(_schema, params, callback);
}

/**
* Clear out items.
*
* @method clear
* @param {Object} settings			Request settings.
* @param {Function} callback		A callback function.
* @return {Object} 					Returns error object on failure, null on success.
*/
function clear(settings, callback) {
	// set up parameters
	const params = {
		name: settings.name,
	};
	// remove
	core.remove(_schema, params, callback);
}


/**
* EXPORT THE FINISHED CLASS
* module.exports = className;
**/

module.exports = {
	find,
	add,
	clear,
	exists,
};

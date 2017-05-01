/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
// const conf = require("../../config");
// helpers
const helpers = require("helpers");
// main core
const core = require("../core");
// pcSns
// const sns = app.sns;
// mongo
// const mongo = require("mongodb");
// third-party libraries
const db = require("mongoose");
// model
const _schema = db.model("Feed");


// THIRD PARTY LIBRARIES -------------------------------
// amazon web services
// const aws = require("aws-sdk");
// this library calls AWS directly, because we're working with such big
// data sets that it isn't performat to use pcSNS. We need paged data
// sets.

// asyncronous functionality (async.each, etc) for performance
// const async = require("async");
const _ = require("lodash");


// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
// const _debug = conf.debug;

// get port, db name from conf

/**
* PRIVATE PROPERTIES
* const _privateBar;
**/


/**
* PRIVATE METHODS
* function privateBar(){ var self = this; return this.foo; }
**/


/**
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
**/

// -> check for existing data
// -> check existing data's date
// -> save new data only if no non-expired existing data
// -> pull data if there is non-expired existing data

// -> save most-recent detail pull, too
// (notifications going out will mean lots of people accessing the same ID)

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
		source: settings.source,
		type: settings.type,
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
		source: settings.source,
		type: settings.type,
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
		source: settings.source,
		type: settings.type,
		name: settings.name,
	};
	// search
	core.exists(_schema, params, callback);
}


/**
* EXPORT THE FINISHED CLASS
* module.exports = className;
**/

module.exports = {
	find,
	// findById,
	add,
	// remove,
	exists,
};

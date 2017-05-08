/**
* PHILLY STORE APP
* the core sub-class.
* Contains methods and variables for logs functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
const app = require("MAIN");
// config
const conf = require("APP/config");
// sub-modules
const core = require("COMP/core");
// pcSns
// const sns = app.sns;
// database
const db = app.db;
// model
const _schema = db.model("Log");


// THIRD PARTY LIBRARIES -------------------------------
// amazon web services
// const aws = require("aws-sdk");
// this library calls AWS directly, because we're working with such big
// data sets that it isn't performat to use pcSNS. We need paged data
// sets.

// asyncronous functionality (async.each, etc) for performance
// const async = app.async;


// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug;
const _dbconf = conf.database;


/**
* PRIVATE PROPERTIES
* const _privateBar;
**/


/**
* PRIVATE METHODS
* function _privateBar(){ var self = this; return this.foo; }
**/

/**
 * Ensure we only have $limited items in the db at any time
 *
 * @method clearOldLogs
 * @param {Function} callback		Returns error or result
 * @return {Function}
 */
function clearOldLogs(callback) {
	// set up parameters
	const params = {
		// how many to find -- we're getting the "oldest" newest date,
		// eliminating the others
		limit: 1,
		// skip until the limit of logs (e.g., 20)
		skip: _dbconf.logs.limit,
		// reverse (e.g., 20 most recent)
		sort: {
			date: "desc",
		},
	};
	// clear out old logs
	core.clearOld(_schema, params, callback);
}


/**
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
**/

/**
 * Get recent item(s).
 *
 * @method findAll
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {Function}
 */
function findAll(settings, callback) {
	// set up parameters
	const params = {
		// get the most recent X log entries
		limit: settings.limit,
		// reverse chronological
		sort: {
			date: "desc",
		},
	};
	// find a document!
	core.find(_schema, params, (err, data) => {
		if (err) {
			return callback(err);
		}
		// otherwise...
		// log if debugging
		if (_debug) {
			console.log("Finding all logs...", data);
		}
		// continue
		return callback(null, data);
	});
}

/**
 * Get an item by its ID.
 *
 * @method findById
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {function}
**/
function findById(settings, callback) {
	// find the item
	core.findById(_schema, settings.id, (err, data) => {
		if (err) {
			return callback(err);
		}
		// otherwise...
		// log if debugging
		if (_debug) {
			console.log("Finding log...", data);
		}
		// continue
		return callback(null, data);
	});
}

/**
 * Insert a new item. Automatically delete the oldest at the same time.
 *
 * @method add
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @param {boolean} noClear			If true, don't clear old logs.
 * @return {Function}
*/
function add(settings, callback, noClear) {
	// set up parameters
	const params = {
		date: settings.date || new Date(),
		target: settings.target,
		message: settings.message,
	};
	// insert document
	core.add(_schema, params, (err, data) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise
		// no clear?
		if (noClear) {
			return callback(null, data);
		}
		// clear older logs
		return clearOldLogs((newErr) => {
			// handle errors
			if (newErr) {
				return callback(newErr);
			}
			// otherwise...
			// log if debugging
			if (_debug) {
				console.log("Adding log...", data);
			}
			// continue
			return callback(null, data);
		});
	});
}

/**
 * Remove an item. (Not currently used.)
 *
 * @method remove
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {Function}
*/
function remove(settings, callback) {
	// remove
	core.remove(_schema, settings, (err, data) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		// log if debugging
		if (_debug) {
			console.log("Removing log...", data);
		}
		// continue
		return callback(null, data);
	});
}

/**
 * Does an item already exist?
 *
 * @method _exists
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {Object} 			Returns error object on failure, null on success.
*/
function exists(settings, callback) {
	// set up parameters
	const params = {
		target: settings.target,
		message: settings.message,
	};
	// search
	core.exists(_schema, params, (err, data) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise, add value to the sendData
		// debug information
		if (_debug) {
			console.log("Checking log...", data);
		}
		// continue
		return callback(null, data);
	});
}


/**
* EXPORT THE FINISHED CLASS
* module.exports = className;
**/

module.exports = {
	findAll,
	findById,
	add,
	remove,
	exists,
};

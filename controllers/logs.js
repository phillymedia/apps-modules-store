/**
* PHILLY STORE APP
* the core sub-class.
* Contains methods and variables for logs functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
const conf = require("../config");
// sub-modules
const core = require("./core");
// pcSns
// const sns = app.sns;
// mongo
// const mongo = require("mongodb");
// third-party libraries
const mongoose = require("mongoose");
// model
const _schema = mongoose.model("Log");


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
* @param {Object} req				Original request.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function findAll(req, res, next) {
	// set up parameters
	const params = {
		// get the most recent X log entries
		limit: _dbconf.logs.view,
		// reverse chronological
		sort: {
			date: "desc",
		},
	};
	// find a document!
	core.find(_schema, params, (err, data) => {
		if (err) {
			return next(err);
		}
		// otherwise...
		res.sendData = data;
		// log if debugging
		if (_debug) {
			console.log("Finding all logs...", res.sendData);
		}
		// continue
		return next();
	});
}

/**
* Get an item by its ID.
*
* @method findById
* @param {Object} req 			Original request, passed from the parent module.
* @param {Function} callback	A callback function.
* @return {Object} 				Returns error object on failure, null on success.
*/
// eslint-disable-next-line no-unused-vars
function findById(req, res, next) {
	// find the item
	core.findById(_schema, req.id, (err, data) => {
		if (err) {
			return next(err);
		}
		// otherwise...
		res.sendData = data;
		// log if debugging
		if (_debug) {
			console.log("Finding log...", res.sendData);
		}
		// continue
		return next();
	});
}

/**
* Insert a new item. Automatically delete the oldest at the same time.
*
* @method add
* @param {Object} req				Original request.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function add(req, res, next) {
	// set up parameters
	const params = {
		date: new Date(),
		target: req.originalTarget,
		message: req.deviceMessage,
	};
	// insert document
	core.add(_schema, params, (err, data) => {
		// handle errors
		if (err) {
			return next(err);
		}
		// otherwise
		// eslint-disable-next-line no-unused-vars
		clearOldLogs((err, innerData) => {
			// handle errors
			if (err) {
				return next(err);
			}
			// otherwise...
			res.sendData = data;
			// log if debugging
			if (_debug) {
				console.log("Adding log...", res.sendData);
			}
			// continue
			return next();
		});
	});
}

/**
* Remove an item. (Not currently used.)
*
* @method remove
* @param {Object} req				Original request.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function remove(req, res, next) {
	// set up parameters
	const params = {
		foo: "bar",
	};
	core.remove(_schema, params, (err, data) => {
		// handle errors
		if (err) {
			return next(err);
		}
		// otherwise...
		res.sendData = data;
		// log if debugging
		if (_debug) {
			console.log("Removing log...", res.sendData);
		}
		// continue
		return next();
	});
}

/**
* Does an item already exist?
*
* @method _exists
* @param {Object} req		Original request.
* @param {Object} res		Response to send back.
* @param {Function} next	A callback function.
* @return {Object} 			Returns error object on failure, null on success.
*/
function exists(req, res, next) {
	// set up parameters
	const params = {
		target: req.originalTarget,
		message: req.deviceMessage,
	};
	// search
	core.exists(_schema, params, (err, exists) => {
		// handle errors
		if (err) {
			return next(err);
		}
		// otherwise, add value to the sendData
		res.sendData = exists;
		// debug information
		if (_debug) {
			console.log("Checking log...", res.sendData);
		}
		// continue
		return next();
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

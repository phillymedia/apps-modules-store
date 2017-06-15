/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// logging
import log from "COMP/logging";
// APP -------------------------------
import app from "MAIN";
// sub-modules
const core = require("COMP/core");
// pcSns
// const sns = app.sns;
// database
const db = app.db;
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
import { isEmpty } from "lodash";


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
	const hintEx = new RegExp(settings.hint, "gi");
	// find the item
	core.find(_schema, { arn: hintEx }, (err, data) => {
		if (err) {
			return callback(err);
		}
		// otherwise...
		log.debug("Finding by hint...", data);
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
	core.find(_schema, {}, (err, data) => {
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
	const params = {
		arn: settings.arn,
		attributes: settings.attributes,
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
		if (!isEmpty(data)) {
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
	const params = {
		arn: settings.arn,
		attributes: settings.attributes,
	};
	// insert document
	core.add(_schema, params, (err, data) => {
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
	const params = {
		arn: settings.arn,
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
	const params = {
		arn: settings.arn,
	};
	// search
	core.exists(_schema, params, callback);
}


// EXPORTS
// =============================================================================

export default {
	find,
	findByHint,
	findAll,
	add,
	remove,
	exists,
};

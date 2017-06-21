// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isEmpty } from "lodash";
// APP -------------------------------
// config
import { database as _database } from "APP/config";
// logging
import log from "COMP/logging";
// sub-modules
import core from "COMP/core";


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
	core.find(settings.schema, { arn: hintEx }, (err, data) => {
		if (err) {
			return callback(err);
		}
		// mongoose always returns an array, but there should only be one item
		// so, peel off content
		if (!isEmpty(data)) {
			data = data[0];
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
function findAll(settings, callback) {
	// find a document!
	core.find(settings.schema, {}, (err, data) => {
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
	core.find(settings.schema, params, (err, data) => {
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
	core.add(settings.schema, params, (err, data) => {
		// handle errors
		if (err) {
			// duplicate entry -- fall through!
			if (err.code === _database.errors.duplicate) {
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
	const params = {};
	// add arn if it exists...
	if (settings.arn) {
		params.arn = settings.arn;
	}
	// remove document
	core.remove(settings.schema, params, callback);
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
	core.exists(settings.schema, params, callback);
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

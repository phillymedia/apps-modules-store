// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isEmpty } from "lodash";
// APP -------------------------------
// logging
import log from "COMP/logging";
// sub-modules
import core from "COMP/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

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


// EXPORTS
// =============================================================================

export {
	exists,
	find,
	findByHint,
	findAll,
};

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get item(s).
 *
 * @method findOne
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */
function findOne(settings, callback) {
	// set up parameters
	const params = {
		id: settings.id,
	};
	// find a document!
	core.findOne(_schema, params, (err, data) => {
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
	const params = {
		id: settings.id,
	};
	// search
	core.exists(_schema, params, callback);
}


// EXPORTS
// =============================================================================

export {
	findOne,
	exists,
};

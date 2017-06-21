// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PRIVATE -------------------------------

/**
 * Get an item by some parameters.
 *
 * @method findByParams
 * @param {object} Schema 					The schema used by the parent module.
 * @param {object} params					The details of the search.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */
function findByParams(Schema, params, callback) {
	// find the item
	const query = Schema.find(params);
	// make the query lean
	query.lean();
	// execute the query
	query.exec((err, item) => {
		if (err) {
			return callback(formatError(err));
		}
		// next!
		return callback(err, item.length !== 0);
	});
}


// PUBLIC -------------------------------

/**
 * Check if matching record already exists.
 *
 * @method exists
 * @param {object} Schema 					The schema used by the parent module.
 * @param {object} params					The details of the search.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */
function exists(Schema, params, callback) {
	// call find by params
	findByParams(Schema, params, (err, data) => {
		// handle errors
		if (err) {
			return callback(formatError(err));
		}
		// otherwise...
		return callback(null, data);
	});
}


// EXPORTS
// =============================================================================

export default exists;

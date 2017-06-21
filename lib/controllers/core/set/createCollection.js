// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// database
import { connection } from "COMP/db";
const db = connection.db;
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to create collection.
 *
 * @method createCollection
 * @param {object} colName 					The name of the collection to create.
 * @param {object} params					The details of the creation.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */
function createCollection(colName, params, callback) {
	// create the collection
	db.createCollection(colName, params, (err, collection) => {
		// handle errors...
		if (err) {
			return callback(formatError(err));
		}
		// otherwise...
		return callback(null, collection);
	});
}


// EXPORTS
// =============================================================================

export default createCollection;

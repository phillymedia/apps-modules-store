// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// logging
import log from "COMP/logging";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Drop the collection.
 *
 * @method drop
 * @param {Function} callback		Returns error or result.
 * @return {Function}
*/
function drop(callback) {
	// remove
	core.drop(_schema, (err, data) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		log.debug("Removing log...", data);
		// continue
		return callback(null, data);
	});
}


// EXPORTS
// =============================================================================

export default drop;

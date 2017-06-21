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
		log.debug("Finding log...", data);
		// continue
		return callback(null, data);
	});
}


// EXPORTS
// =============================================================================

export default findById;

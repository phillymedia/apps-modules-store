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
		log.debug("Checking log...", data);
		// continue
		return callback(null, data);
	});
}


// EXPORTS
// =============================================================================

export default exists;

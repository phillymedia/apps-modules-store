// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
import core from "COMP/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

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


// EXPORTS
// =============================================================================

export default remove;

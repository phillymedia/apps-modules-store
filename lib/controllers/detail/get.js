// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/detail/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @method get
 * @return {Function} core.find				The shared getter.
 */
function get(id, callback) {
	// settings
	const settings = {
		id,
	};
	// find
	return core.findOne(settings, callback);
}


// EXPORT
// =============================================================================

export default get;

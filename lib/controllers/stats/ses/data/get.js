// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================

const _name = "ses_data";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @method get
 * @return {Function} core._find				The shared getter.
 */
function get(callback) {
	const settings = {
		name: _name,
	};
	return core.find(settings, callback);
}


// EXPORTS
// =============================================================================

export default get;

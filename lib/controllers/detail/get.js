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

/**
 * Get store.
 *
 * @method getMany
 * @param {array} ids
 * @param {function} callback
 */
function getMany(ids, callback) {
	console.log(ids);
	// settings
	const settings = {
		id: ids,
	};
	// find
	return core.findMany(settings, callback);
}


// EXPORT
// =============================================================================

export { get, getMany };

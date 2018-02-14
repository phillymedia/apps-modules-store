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
 * @returns {function} core.find - The shared getter.
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
 * @param {array} ids
 * @param {function} callback
 */
function getMany(ids, callback) {
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

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/detail/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Drop and recreate store.
 *
 * @param {function} callback - A callback function.
 * @returns {function} core.recreateCollection - The shared setter.
 */
function recreateCollection(callback) {
  // find
  return core.recreateCollection(callback);
}


// EXPORT
// =============================================================================

export default recreateCollection;

// DEPENDENCIES
// =============================================================================
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================
const _name = "users";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Flush store.
 *
 * @param {function} callback - A callback function.
 * @returns {function} core.remove - The shared remover.
 */
function clear(callback) {
  const settings = {
    name: _name,
  };
  return core.remove(settings, callback);
}


// EXPORTS
// =============================================================================

export default clear;

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================

const _name = "subscriptions";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.find - The shared getter.
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

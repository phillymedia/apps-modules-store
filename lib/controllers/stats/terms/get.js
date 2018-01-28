// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================
const _name = "terms";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - A callback.
 * @return {Function}
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

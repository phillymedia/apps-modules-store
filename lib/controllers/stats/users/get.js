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
 * Get store.
 *
 * @returns {function} core.find - The shared getter.
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

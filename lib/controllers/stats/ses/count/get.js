// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================

const _name = "ses_count";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @return {function} core.find - The shared getter.
 */
function get(callback) {
  const settings = {
    name: _name,
  };
  return core.find(settings, callback);
}


// EXPORT
// =============================================================================

export default get;

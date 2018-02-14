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
 * Remove store.
 *
 * @param {function} callback
 * @returns {function} core.remove - The shared remover.
 */
function remove(callback) {
  const settings = {
    name: _name,
  };
  return core.remove(settings, callback);
}


// EXPORT
// =============================================================================

export default remove;

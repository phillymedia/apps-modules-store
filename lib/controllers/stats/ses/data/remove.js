// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
// import { parallel } from "async";
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
 * Remove store.
 *
 * @param {function} callback
 * @return {Function} core.remove - The shared remover.
 */
function remove(callback) {
  const settings = {
    name: _name,
  };
  return core.remove(settings, callback);
}


// EXPORTS
// =============================================================================

export default remove;

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
* Flush store.
*
* @method clear
* @param {Function} callback - A callback function.
* @return {Function} core.remove - The shared remover.
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

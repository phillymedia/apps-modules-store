// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/stats/core";


// PROPERTIES
// =============================================================================

const _store = store.admin;
const _delay = _store.expiresInMinutes;
const _name = "ses_data";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @method set
 * @param {Object} content - Data to store.
 * @param {Function} callback - A callback function.
 * @return {Function} core._add - The shared setter.
 */
function set(content, callback) {
  const settings = {
    delay: _delay,
    name: _name,
    content,
  };
  return core.add(settings, callback);
}


// EXPORTS
// =============================================================================

export default set;

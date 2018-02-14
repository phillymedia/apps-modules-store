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
const _name = "ses_count";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @returns {function} core._add - The shared setter.
 */
function set(content, callback) {
  const settings = {
    delay: _delay,
    name: _name,
    content,
  };
  return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default set;

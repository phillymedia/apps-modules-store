// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.searchLegacy.v1;
const _source = _store.source;
const _type = _store.type;
const _name = "philly";
const _delay = _store.expiresInMinutes;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback.
 * @returns {function}
 */
function set(content, callback) {
  const settings = {
    source: _source,
    type: _type,
    delay: _delay,
    name: _name,
    content,
  };
  return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default set;

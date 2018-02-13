// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";

// PROPERTIES
// =============================================================================
const _store = store.sportsLegacy.v1;
const _source = _store.source;
const _name = _store.name;
const _type = _store.type.combined;
const _delay = _store.expiresInMinutes.combined;


// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
 * Set store.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @return {function}
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

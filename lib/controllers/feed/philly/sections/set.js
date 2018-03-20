// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.sections;
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
 * @param {object} content - Sections
 * @param {function} callback - A callback.
 * @param {object} data - Additional data to store.
 * @returns {function}
 */
function set(content, callback, data = {}) {
  const settings = Object.assign({
    source: _source,
    type: _type,
    delay: _delay,
    name: _name,
    content
  }, data);

  return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default set;

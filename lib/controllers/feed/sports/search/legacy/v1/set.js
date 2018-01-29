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
const _name = "sports";
const _delay = _store.expiresInMinutes;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Set store.
*
* @param {String} name - Name of the store.
* @param {Object} content - Data to store.
* @param {Function} callback - A callback function.
* @return {Function}
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
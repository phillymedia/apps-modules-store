// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.main;
const _source = _store.source;
const _type = _store.type.articles;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove from store.
 *
 * @param {string} name - Name of the store.
 * @returns {function} core.remove
 */
function remove(name, callback) {
  const settings = {
    source: _source,
    type: _type,
    name,
  };
  return core.remove(settings, callback);
}


// EXPORT
// =============================================================================

export default remove;

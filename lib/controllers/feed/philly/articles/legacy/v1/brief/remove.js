// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.mainLegacy.v1;
const _source = `${_store.source}brief`;
const _type = _store.type.articles;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove from store - brief - v1.
 *
 * @param {string} name - Name of the store.
 * @param {function} callback - A callback.
 * @returns {function}
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

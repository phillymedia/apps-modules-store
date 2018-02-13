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
const _name = _store.name;
const _type = _store.type.articles;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove data from store - brief - v1.
 *
 * @param {function} callback - A callback.
 * @returns {function}
 */
function remove(callback) {
  const settings = {
    source: _source,
    type: _type,
    name: _name,
  };
  return core.remove(settings, callback);
}


// EXPORT
// =============================================================================

export default remove;

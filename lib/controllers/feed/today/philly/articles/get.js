// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.today;
const _source = _store.source;
const _type = _store.type.articles;


// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
 * Get store.
 *
 * @param {string} name - Name of the store.
 * @param {function} callback - A callback function.
 * @return {function} core.find - The shared getter.
 */
function get(name, callback) {
  const settings = {
    source: _source,
    type: _type,
    name,
  };
  return core.find(settings, callback);
}


// EXPORTS
// =============================================================================

export default get;

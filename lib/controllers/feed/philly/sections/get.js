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


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - A callback.
 * @param {object} data - Additional data to be stored in the store.
 * @returns {function}
 */
function get(callback, data = {}) {
  const settings = Object.assign({
    source: _source,
    type: _type,
    name: _name,
  }, data);

  return core.find(settings, callback);
}


// EXPORT
// =============================================================================

export default get;

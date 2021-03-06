// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";

// PROPERTIES
// =============================================================================
const _store = store.sports;
const _source = _store.source;
const _name = _store.name;
const _type = _store.type.combined;


// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - The callback function.
 * @returns {function}
 */
function get(callback) {
  const settings = {
    source: _source,
    type: _type,
    name: _name,
  };
  return core.find(settings, callback);
}


// EXPORT
// =============================================================================

export default get;

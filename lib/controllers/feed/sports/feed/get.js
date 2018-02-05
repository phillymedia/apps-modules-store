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
 * @method getFeed
 * @param {function} callback - The callback function.
 * @return {function}
 */
function get(callback) {
  console.log("SPORTS FEED GET CALL", _source, _type, _name);
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

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
const _type = _store.type.games;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Remove from store.
*
* @method remove
* @param {function} callback
* @return {Function} core.remove
*/
function remove(callback) {
  const settings = {
    source: _source,
    type: _type,
    name: _name,
  };
  return core.remove(settings, callback);
}


// EXPORTS
// =============================================================================

export default remove;

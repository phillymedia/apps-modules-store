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
const _type = _store.type.tweets;


// PROPERTIES
// =============================================================================
// PUBLIC -------------------------------

/**
* Get store.
*
* @method get
* @param {function} callback
* @return {Function} core._find - The shared getter.
*/
function get(callback) {
  const settings = {
    source: _source,
    type: _type,
    name: _name,
  };
  return core.find(settings, callback);
}

// EXPORTS
// =============================================================================

export default get;

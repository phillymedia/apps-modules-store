// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.search;
const _source = _store.source;
const _type = _store.type;
const _name = "philly";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Get store.
*
* @method get
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


// EXPORT
// =============================================================================

export default get;

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
import core from "COMP/core";
// config
import { store } from "APP/config";
// model
import _schema from "./schema";


// PROPERTIES
// =============================================================================

const _store = store.detail;
const _name = _store.collectionName;
const _size = _store.collectionSize;
const _max = _store.collectionMax;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Drop collection.
 *
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error object on failure, null on success.
 */
function recreateCollection(callback) {
  // parameters
  const params = {
    capped: true,
    max: _max,
    size: _size,
  };
  // remove
  core.recreateCollection(_name, _schema, params, callback);
}


// EXPORTS
// =============================================================================

export default recreateCollection;

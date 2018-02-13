// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// siblings
import { drop } from "./remove";
import { createCollection } from "./set";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to drop collection.
 *
 * @param {string} colName - The name of the collection.
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function}
 */
function recreateCollection(colName, Schema, params, callback) {
  // drop the collection
  drop(Schema, (err) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return createCollection(colName, params, callback);
  });
}


// EXPORTS
// =============================================================================

export default recreateCollection;

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to drop collection.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error or array.
 */
function drop(Schema, callback) {
  // drop the collection
  Schema.collection.drop((err, data) => {
    // handle errors
    if (err) {
      return callback(formatError(err));
    }
    // otherwise...
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export default drop;

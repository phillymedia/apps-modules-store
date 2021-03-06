// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to remove reords.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error or array.
 */
function remove(Schema, params, callback) {
  Schema.remove(params, (err, data) => {
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

export default remove;

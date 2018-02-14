// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to insert new reords.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error or array.
 */
function add(Schema, params, callback) {
  // create the item from params
  // (this will validate based on the schema)
  const schema = new Schema(params);
  // save document
  schema.save()
    // success!
    .then(data => callback(null, data))
    // failure
    .catch(err => callback(formatError(err)));
}


// EXPORTS
// =============================================================================

export default add;

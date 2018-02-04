// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to insert many new records.
 * Setting { ordered: false } allows for the operation to continue/recover
 * after duplicate-entry errors.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {array} documents - The array of documents to insert.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function addMany(Schema, documents, callback) {
  // create the item from params
  // (this will validate based on the schema)
  // save array of documents
  Schema.insertMany(documents, { ordered: false }, (err, data) => {
    if (err) {
      return callback(formatError(err));
    }
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export default addMany;

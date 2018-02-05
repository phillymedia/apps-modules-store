// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isEmpty, filter, map } from "lodash";
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";
// config
import { database as _database } from "APP/config";


// METHODS
// =============================================================================
// PRIVATE -------------------------------

/**
 * Handles potential duplicate entries.
 *
 * @param {error} err
 * @param {function} callback
 * @returns {function}
 */
function handleDuplicates(err, callback) {
  // handle duplicate errors
  if (err.code === _database.errors.duplicate
    && err.writeErrors) {
    // get write errors
    const { writeErrors } = err;
    // get original operation data for duplicate errors
    const duplicateErrors = map(filter(writeErrors, ["code", _database.errors.duplicate]), writeError => (writeError.getOperation()));
    // pass duplicate errors to call
    if (!isEmpty(duplicateErrors)) {
      return callback(formatError(err), duplicateErrors);
    }
  }
  // otherwise
  return callback(formatError(err));
}

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
  Schema.insertMany(documents, { ordered: false })
    // success!
    .then(data => callback(null, data))
    // failure
    .catch(err => handleDuplicates(err, callback));
}


// EXPORTS
// =============================================================================

export default addMany;

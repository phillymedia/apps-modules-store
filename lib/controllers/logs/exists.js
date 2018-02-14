// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// logging
import { log } from "philly-helpers";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Does an item already exist?
 *
 * @param {object} settings - Settings for the request.
 * @param {function} callback - Returns error or result.
 * @returns {object} - Returns error object on failure, null on success.
 */
function exists(settings, callback) {
  // set up parameters
  const params = {
    target: settings.target,
    message: settings.message,
  };
  // search
  core.exists(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise, add value to the sendData
    log.debug("Checking log...", data);
    // continue
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export default exists;

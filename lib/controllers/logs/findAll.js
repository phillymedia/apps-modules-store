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
 * Get recent item(s).
 *
 * @param {object} settings - Settings for the request.
 * @param {function} callback - Returns error or result.
 * @returns {function}
 */
function findAll(settings, callback) {
  // set up parameters
  const params = {
    // get the most recent X log entries
    limit: settings.limit,
    // reverse chronological
    sort: {
      date: "desc",
    },
  };
  // find a document!
  core.find(_schema, params, (err, data) => {
    if (err) {
      return callback(err);
    }
    // otherwise...
    log.debug("Finding all logs...", data);
    // continue
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export default findAll;

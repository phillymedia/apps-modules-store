// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item. Automatically delete the oldest at the same time.
 *
 * @param {object} settings - Settings for the request.
 * @param {function} callback - Returns error or result.
 * @returns {function}
 */
function add(settings, callback) {
  // set up parameters
  const params = {
    date: settings.date || new Date(),
    target: settings.target,
    message: settings.message,
  };
  // optional id
  if (settings.id) {
    params.id = settings.id;
  }
  // insert document
  core.add(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export default add;

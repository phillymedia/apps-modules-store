// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";
// siblings
import remove from "./remove";
import { find } from "COMP/core/get";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Clear out records based on given parameters.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error or array.
 */
function clearOld(Schema, params, callback) {
  // find the oldest
  find(Schema, params, (err, limitItem) => {
    // handle errors
    if (err) {
      return callback(formatError(err));
    }
    // not at our limit
    if (!limitItem || !limitItem.length) {
      return callback();
    }
    // otherwise, get the date of that item and update params
    params = { date: { $lt: limitItem[0].date } };
    // remove
    return remove(Schema, params, callback);
  });
}


// EXPORTS
// =============================================================================

export default clearOld;

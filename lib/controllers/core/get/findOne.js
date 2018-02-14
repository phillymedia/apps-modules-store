// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { formatError } from "philly-helpers";

// THIRD PARTY LIBRARIES -------------------------------
import { unset } from "lodash";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Find one by parameters.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error or array.
 */
function findOne(Schema, params, callback) {
  // pull sort if it exists
  const sort = params.sort || false;
  // remove sort from params
  unset(params, ["sort"]);
  // pull skip if it exists
  const skip = params.skip || false;
  // remove skip from params
  unset(params, ["skip"]);
  // find the items
  const query = Schema.findOne(params);
  // sort
  if (sort) {
    query.sort(sort);
  }
  // skip
  if (skip) {
    query.skip(skip);
  }
  // make the query lean
  query.lean();
  // execute the query
  query.exec((err, data) => {
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

export default findOne;

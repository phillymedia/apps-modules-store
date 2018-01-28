"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

var _lodash = require("lodash");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Find by parameters.
 *
 * @method find
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
function find(Schema, params, callback) {
  // pull limit if it exists
  var limit = params.limit || 0;
  // remove limit from params
  (0, _lodash.unset)(params, ["limit"]);
  // pull sort if it exists
  var sort = params.sort || false;
  // remove sort from params
  (0, _lodash.unset)(params, ["sort"]);
  // pull skip if it exists
  var skip = params.skip || false;
  // remove skip from params
  (0, _lodash.unset)(params, ["skip"]);
  // find the items
  var query = Schema.find(params);
  // sort
  if (sort) {
    query.sort(sort);
  }
  // skip
  if (skip) {
    query.skip(skip);
  }
  // limit
  query.limit(limit);
  // make the query lean
  query.lean();
  // execute the query
  query.exec(function (err, data) {
    // handle errors
    if (err) {
      return callback((0, _phillyHelpers.formatError)(err));
    }
    // otherwise...
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

// THIRD PARTY LIBRARIES -------------------------------
exports.default = find;
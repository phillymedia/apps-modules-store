"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PRIVATE -------------------------------

/**
 * Get an item by some parameters.
 *
 * @method findByParams
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function findByParams(Schema, params, callback) {
  // find the item
  var query = Schema.find(params);
  // make the query lean
  query.lean();
  // execute the query
  query.exec(function (err, item) {
    if (err) {
      return callback((0, _phillyHelpers.formatError)(err));
    }
    // next!
    return callback(err, item.length !== 0);
  });
}

// PUBLIC -------------------------------

/**
 * Check if matching record already exists.
 *
 * @method exists
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
function exists(Schema, params, callback) {
  // call find by params
  findByParams(Schema, params, function (err, data) {
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

exports.default = exists;
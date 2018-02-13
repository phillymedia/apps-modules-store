"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _remove = require("./remove");

var _set = require("./set");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to drop collection.
 *
 * @param {string} colName - The name of the collection.
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function}
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// siblings
function recreateCollection(colName, Schema, params, callback) {
  // drop the collection
  (0, _remove.drop)(Schema, function (err) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return (0, _set.createCollection)(colName, params, callback);
  });
}

// EXPORTS
// =============================================================================

exports.default = recreateCollection;
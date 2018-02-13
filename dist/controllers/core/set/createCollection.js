"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("../../db");

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to create collection.
 *
 * @method createCollection
 * @param {object} colName - The name of the collection to create.
 * @param {object} params - The details of the creation.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// database
function createCollection(colName, params, callback) {
  // create the collection
  _db.db.createCollection(colName, params, function (err, collection) {
    // handle errors...
    if (err) {
      return callback((0, _phillyHelpers.formatError)(err));
    }
    // otherwise...
    return callback(null, collection);
  });
}

// EXPORTS
// =============================================================================

// helpers
exports.default = createCollection;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("../../db");

var _phillyHelpers = require("philly-helpers");

var db = _db.connection.db;
// helpers
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// database

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to create collection.
 *
 * @param {object} colName - The name of the collection to create.
 * @param {object} params - The details of the creation.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function createCollection(colName, params, callback) {
  // create the collection
  db.createCollection(colName, params, function (err, collection) {
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

exports.default = createCollection;
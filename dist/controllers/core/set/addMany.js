"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to insert many new records.
 * Setting { ordered: false } allows for the operation to continue/recover
 * after duplicate-entry errors.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {array} documents - The array of documents to insert.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function addMany(Schema, documents, callback) {
  // create the item from params
  // (this will validate based on the schema)
  // save array of documents
  Schema.insertMany(documents, { ordered: false }, function (err, data) {
    if (err) {
      return callback((0, _phillyHelpers.formatError)(err));
    }
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = addMany;
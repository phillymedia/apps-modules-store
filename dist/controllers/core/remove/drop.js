"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to drop collection.
 *
 * @param {object} Schema - The schema used by the parent module.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function drop(Schema, callback) {
  // drop the collection
  Schema.collection.drop(function (err, data) {
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

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = drop;
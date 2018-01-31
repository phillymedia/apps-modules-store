"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to insert new reords.
 *
 * @method add
 * @param {object} Schema - The schema used by the parent module.
 * @param {object} params - The details of the search.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error or array.
 */
function add(Schema, params, callback) {
  // create the item from params
  // (this will validate based on the schema)
  var schema = new Schema(params);
  // save document
  schema.save().then(function (data) {
    return callback(null, data);
  }).catch(function (err) {
    return callback((0, _phillyHelpers.formatError)(err));
  });
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = add;
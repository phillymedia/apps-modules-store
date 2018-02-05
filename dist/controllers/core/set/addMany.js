"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

var _phillyHelpers = require("philly-helpers");

var _config = require("../../../config");

// METHODS
// =============================================================================
// PRIVATE -------------------------------

/**
 * Handles potential duplicate entries.
 *
 * @param {error} err
 * @param {function} callback
 * @returns {function}
 */

// APP -------------------------------
// helpers
function handleDuplicates(err, callback) {
  // handle duplicate errors
  if (err.code === _config.database.errors.duplicate && err.writeErrors) {
    // get write errors
    var writeErrors = err.writeErrors;
    // get original operation data for duplicate errors

    var duplicateErrors = (0, _lodash.map)((0, _lodash.filter)(writeErrors, ["code", _config.database.errors.duplicate]), function (writeError) {
      return writeError.getOperation();
    });
    // pass duplicate errors to call
    if (!(0, _lodash.isEmpty)(duplicateErrors)) {
      return callback((0, _phillyHelpers.formatError)(err), duplicateErrors);
    }
  }
  // otherwise
  return callback((0, _phillyHelpers.formatError)(err));
}

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

// config
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
function addMany(Schema, documents, callback) {
  // create the item from params
  // (this will validate based on the schema)
  // save array of documents
  Schema.insertMany(documents, { ordered: false })
  // success!
  .then(function (data) {
    return callback(null, data);
  })
  // failure
  .catch(function (err) {
    return handleDuplicates(err, callback);
  });
}

// EXPORTS
// =============================================================================

exports.default = addMany;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Does an item already exist?
 *
 * @method _exists
 * @param {Object} settings - Settings for the request.
 * @param {Function} callback - Returns error or result.
 * @return {Object} - Returns error object on failure, null on success.
*/

// sub-modules
function exists(settings, callback) {
  // set up parameters
  var params = {
    target: settings.target,
    message: settings.message
  };
  // search
  _core2.default.exists(_schema3.default, params, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise, add value to the sendData
    _phillyHelpers.log.debug("Checking log...", data);
    // continue
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// logging
exports.default = exists;
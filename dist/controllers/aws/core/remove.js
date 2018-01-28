"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method remove
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function remove(settings, callback) {
  // set up parameters
  var params = {};
  // add arn if it exists...
  if (settings.arn) {
    params.arn = settings.arn;
  }
  // remove document
  _core2.default.remove(settings.schema, params, callback);
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
exports.default = remove;
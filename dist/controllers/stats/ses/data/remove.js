"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("async");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
var _name = "ses_data";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove store.
 *
 * @method remove
 * @param {function} callback
 * @return {Function} core.remove				The shared remover.
 */

// APP -------------------------------
// main core
function remove(callback) {
  var settings = {
    name: _name
  };
  return _core2.default.remove(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = remove;
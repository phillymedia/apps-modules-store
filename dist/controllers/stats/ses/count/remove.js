"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

var _name = "ses_count";

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
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
function remove(callback) {
  var settings = {
    name: _name
  };
  return _core2.default.remove(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = remove;
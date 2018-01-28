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
 * Get store.
 *
 * @method get
 * @return {Function} core._find - The shared getter.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
function get(callback) {
  var settings = {
    name: _name
  };
  return _core2.default.find(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = get;
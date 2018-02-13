"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

var _name = "subscriptions";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.find - The shared getter.
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

// EXPORTS
// =============================================================================

exports.default = get;
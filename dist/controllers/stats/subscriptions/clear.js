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
 * Flush store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.remove - The shared remover.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
function clear(callback) {
  var settings = {
    name: _name
  };
  return _core2.default.remove(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = clear;
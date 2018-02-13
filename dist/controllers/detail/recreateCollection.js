"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Drop and recreate store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.recreateCollection - The shared setter.
 */
function recreateCollection(callback) {
  // find
  return _core2.default.recreateCollection(callback);
}

// EXPORT
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
exports.default = recreateCollection;
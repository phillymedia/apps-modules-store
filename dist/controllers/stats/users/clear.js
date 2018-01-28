"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================
var _name = "users";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Flush store.
*
* @method clear
* @param {Function} callback - A callback function.
* @return {Function} core.remove - The shared remover.
*/
// DEPENDENCIES
// =============================================================================
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
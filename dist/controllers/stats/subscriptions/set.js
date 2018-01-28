"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../../config");

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var _store = _config.store.admin;
// main core

var _delay = _store.expiresInMinutes;
var _name = "subscriptions";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @method set
 * @param {Object} content - Data to store.
 * @param {Function} callback - A callback function.
 * @return {Function} core.add - The shared setter.
 */
function set(content, callback) {
  var settings = {
    delay: _delay,
    name: _name,
    content: content
  };
  return _core2.default.add(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = set;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../../../config");

var _core = require("../../core");

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
var _name = "ses_count";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @return {function} core.add - The shared setter.
 */
function set(content, callback) {
  var settings = {
    delay: _delay,
    name: _name,
    content: content
  };
  return _core2.default.add(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = set;
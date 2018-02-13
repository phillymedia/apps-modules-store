"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../../../../config");

var _core = require("../../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var _store = _config.store.main;
// main core

var _source = _store.source;
var _type = _store.type.articles;
var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store.
 *
 * @param {string} name - Name of the store.
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @return {function} core.add - The shared setter.
 */
function set(name, content, callback) {
  var settings = {
    source: _source,
    type: _type,
    delay: _delay,
    name: name,
    content: content
  };
  return _core2.default.add(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = set;
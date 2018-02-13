"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../../../../../../config");

var _core = require("../../../../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var _store = _config.store.mainLegacy.v1;
// main core

var _source = _store.source;
var _name = _store.name;
var _type = _store.type.articles;
var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store - v1.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback.
 * @returns {function}
 */
function set(content, callback) {
  var settings = {
    source: _source,
    type: _type,
    delay: _delay,
    name: _name,
    content: content
  };
  return _core2.default.add(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = set;
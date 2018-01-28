"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../../../../../config");

var _core = require("../../../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var _store = _config.store.searchLegacy.v1;
// main core

var _source = _store.source;
var _type = _store.type;
var _name = "philly";
var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Set store.
*
* @method set
* @param {String} name - Name of the store.
* @param {Object} content - Data to store.
* @param {Function} callback - A callback function.
* @return {Function} core._add - The shared setter.
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
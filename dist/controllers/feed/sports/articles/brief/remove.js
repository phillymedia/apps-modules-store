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

var _source = _store.source + "brief";
var _name = _store.name;
var _type = _store.type.articles;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove data from store - brief.
 *
 * @param {function} callback - A callback.
 * @returns {function}
 */
function remove(callback) {
  var settings = {
    source: _source,
    type: _type,
    name: _name
  };
  return _core2.default.remove(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = remove;
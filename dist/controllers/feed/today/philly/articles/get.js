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
var _store = _config.store.today;
// main core

var _source = _store.source;
var _type = _store.type.articles;

// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
 * Get store.
 *
 * @param {string} name - Name of the store.
 * @param {function} callback - A callback function.
 * @return {function} core.find - The shared getter.
 */
function get(name, callback) {
  var settings = {
    source: _source,
    type: _type,
    name: name
  };
  return _core2.default.find(settings, callback);
}

// EXPORTS
// =============================================================================

exports.default = get;
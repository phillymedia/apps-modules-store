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
var _store = _config.store.search;
// main core

var _source = _store.source;
var _type = _store.type;
var _name = "sports";

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.find - The shared getter.
 */
function get(callback) {
  var settings = {
    source: _source,
    type: _type,
    name: _name
  };
  return _core2.default.find(settings, callback);
}

// EXPORT
// =============================================================================

exports.default = get;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../config");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // DEPENDENCIES
// =============================================================================


// METHODS
// =============================================================================

/**
 * A wrapper for console.info.
 *
 * @method info
 * @param {array} args
 */
function info() {
  var _console;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, _toConsumableArray(Array.prototype.slice.call(args)));
}

/**
 * A logger that only prints out in debug mode.
 *
 * @method debug
 * @param {array} args
 */
function debug() {
  if (_config.debug) {
    var _console2;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (_console2 = console).log.apply(_console2, _toConsumableArray(Array.prototype.slice.call(args)));
  }
}

/**
 * A wrapper for console.log.
 *
 * @method log
 * @param {array} args
 */
function error() {
  var _console3;

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  (_console3 = console).error.apply(_console3, _toConsumableArray(Array.prototype.slice.call(args)));
}

// EXPORTS
// =============================================================================
exports.default = {
  info: info,
  debug: debug,
  error: error
};
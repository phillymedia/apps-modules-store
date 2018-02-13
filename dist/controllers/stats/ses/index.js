"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("async");

var _count = require("./count");

var _count2 = _interopRequireDefault(_count);

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Clear store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.add - The shared setter.
 */

// APP -------------------------------
// siblings
function clear(callback) {
  // combined feed, games, tweets
  (0, _async.parallel)([function (next) {
    return _count2.default.remove(next);
  }, function (next) {
    return _data2.default.remove(next);
  }], callback);
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
exports.default = {
  getCount: _count2.default.get,
  setCount: _count2.default.set,
  getData: _data2.default.get,
  setData: _data2.default.set,
  clear: clear
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMany = exports.get = undefined;

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get store.
 *
 * @return {Function} core.find - The shared getter.
 */
function get(id, callback) {
  // settings
  var settings = {
    id: id
  };
  // find
  return _core2.default.findOne(settings, callback);
}

/**
 * Get store.
 *
 * @param {array} ids
 * @param {function} callback
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
function getMany(ids, callback) {
  // settings
  var settings = {
    id: ids
  };
  // find
  return _core2.default.findMany(settings, callback);
}

// EXPORT
// =============================================================================

exports.get = get;
exports.getMany = getMany;
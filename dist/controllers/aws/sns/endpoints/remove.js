"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byArn = exports.all = undefined;

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
var _schema = _db.db.model("Endpoint");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove all from store.
 *
 * @return {function} core.remove
 */

// sub-modules
function all(callback) {
  // settings
  var settings = {
    schema: _schema
  };
  return _core2.default.remove(settings, callback);
}

/**
 * Remove from store - by ARN.
 *
 * @param {string} arn - Arn to remove.
 * @return {function} core.remove
 */
function byArn(arn, callback) {
  // settings
  var settings = {
    schema: _schema,
    arn: arn
  };
  return _core2.default.remove(settings, callback);
}

// EXPORT
// =============================================================================

exports.all = all;
exports.byArn = byArn;
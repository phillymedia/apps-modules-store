"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byHint = exports.all = undefined;

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
var _schema = _db.db.model("Topic");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of topics.
 *
 * @method all
 * @param {function} callback
 */

// sub-modules
function all(callback) {
  // schema
  var settings = {
    schema: _schema
  };
  // get the topic, if it's in oure store
  return _core2.default.findAll(settings, callback);
}

/**
 * Get topic from hint.
 *
 * @method byHint
 * @param {string} topicHint
 * @param {function} callback
 */
function byHint(topicHint, callback) {
  // settings
  var settings = {
    schema: _schema,
    hint: topicHint,
    field: "arn"
  };
  // get the topic, if it's in oure store
  return _core2.default.findByHint(settings, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

exports.all = all;
exports.byHint = byHint;
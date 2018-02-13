"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byUsername = exports.byTopicArn = exports.byEndpoint = exports.all = undefined;

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
var _schema = _db.db.model("Subscription");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of subscriptions.
 *
 * @param {function} callback
 */

// sub-modules
function all(callback) {
  // schema
  var settings = {
    schema: _schema
  };
  // get the sub, if it's in our store
  return _core2.default.findAll(settings, callback);
}

/**
 * Get subscription from endpoint ARN.
 *
 * @param {string} arn
 * @param {function} callback
 */
function byEndpoint(arn, callback) {
  // settings
  var settings = {
    schema: _schema,
    param: arn,
    field: "endpoint"
  };
  // get the sub, if it's in our store
  return _core2.default.findByParam(settings, callback);
}

/**
 * Get subscription from topic ARN.
 *
 * @param {string} arn
 * @param {function} callback
 */
function byTopicArn(arn, callback) {
  // settings
  var settings = {
    schema: _schema,
    param: arn,
    field: "topic"
  };
  // get the sub, if it's in our store
  return _core2.default.findByParam(settings, callback);
}

/**
 * Get subscriptions from username.
 *
 * @param {string} username
 * @param {function} callback
 */
function byUsername(username, callback) {
  // settings
  var settings = {
    schema: _schema,
    param: username,
    field: "username"
  };
  // get the sub, if it's in our store
  return _core2.default.findByParam(settings, callback);
}

// EXPORTS
// =============================================================================

exports.all = all;
exports.byEndpoint = byEndpoint;
exports.byTopicArn = byTopicArn;
exports.byUsername = byUsername;
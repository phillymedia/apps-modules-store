"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sns = exports.stats = exports.logs = exports.detail = exports.feed = undefined;

var _phillyHelpers = require("philly-helpers");

var _aws = require("./controllers/aws");

var _detail = require("./controllers/detail");

var _detail2 = _interopRequireDefault(_detail);

var _feed = require("./controllers/feed");

var _feed2 = _interopRequireDefault(_feed);

var _logs = require("./controllers/logs");

var _logs2 = _interopRequireDefault(_logs);

var _stats = require("./controllers/stats");

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EMERGENCY ERROR HANDLING
// =============================================================================
// don't blow up the app, just in case
process.on("unhandledRejection", function (reason, p) {
  _phillyHelpers.log.error("Unhandled Rejection from Philly Store module at: Promise", p, "reason:", reason);
});
// don't blow up the app, just in case
// DEPENDENCIES
// =============================================================================
process.on("uncaughtException", function (err) {
  _phillyHelpers.log.error("Unhandled Exception from Philly Store module:", err);
});

// EXPORTS
// =============================================================================
exports.feed = _feed2.default;
exports.detail = _detail2.default;
exports.logs = _logs2.default;
exports.stats = _stats2.default;
exports.sns = _aws.sns;
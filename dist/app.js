"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

exports.default = {
	feed: _feed2.default,
	detail: _detail2.default,
	logs: _logs2.default,
	stats: _stats2.default,
	sns: _aws.sns
}; // EXPORTS
// =============================================================================
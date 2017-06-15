"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _logging = require("./controllers/logging");

var _logging2 = _interopRequireDefault(_logging);

var _aws = require("./controllers/aws");

var _feed = require("./controllers/feed");

var _feed2 = _interopRequireDefault(_feed);

var _logs = require("./controllers/logs");

var _logs2 = _interopRequireDefault(_logs);

var _stats = require("./controllers/stats");

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The Philly.com store module, for use with the Philly.com and Sports Now apps.
 *
 * @module store
 */

// CONFIG
// =============================================================================
var conf = require("./config");


// CONNECT TO DATABASE
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// database
var db = require("mongoose");

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
var _debug = conf.debug;

// CONNECT TO THE DATABASE
// =============================================================================
if (_debug) {
	db.set("debug", true);
}
// use ES6 promises
db.Promise = global.Promise;
// connect
var connection = db.connect(conf.database.url).connection;
connection.once("open", function () {
	_logging2.default.debug("Mongoose connection open.");
});
// handle errors
connection.on("error", function (err) {
	_logging2.default.info("Mongoose default connection error: " + err);
	throw new Error("Unable to connect to database!");
});
// when the connection is disconnected
connection.on("disconnected", function () {
	_logging2.default.debug("Mongoose default connection disconnected.");
});
// if the Node process ends, close the Mongoose connection
process.on("SIGINT", function () {
	connection.close(function () {
		_logging2.default.debug("Mongoose default connection disconnected through app termination.");
		process.exit(0);
	});
});

// export database
exports.db = db;
// changes

// REGISTER MODELS
// =============================================================================
// models
require("./models/Feed");
require("./models/Stat");
require("./models/Log");
// aws models
require("./models/Application");
require("./models/Topic");
require("./models/Endpoint"); // might be a bad idea
require("./models/Subscription"); // might be a bad idea

// EXPORTS
// =============================================================================
exports.default = {
	feed: _feed2.default,
	logs: _logs2.default,
	stats: _stats2.default,
	sns: _aws.sns
};
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connection = exports.db = undefined;

var _config = require("../../config");

var _logging = require("../logging");

var _logging2 = _interopRequireDefault(_logging);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONNECT TO THE DATABASE
// =============================================================================
if (_config.debug) {
	_mongoose2.default.set("debug", true);
}
// use ES6 promises


// THIRD PARTY LIBRARIES -------------------------------
// database
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
_mongoose2.default.Promise = global.Promise;
// connect
var connection = _mongoose2.default.connect(_config.database.url).connection;
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
exports.db = _mongoose2.default;
exports.connection = connection;

// REGISTER MODELS
// =============================================================================
// models

require("../../models/Detail");
require("../../models/Feed");
require("../../models/Stat");
require("../../models/Log");
// aws models
require("../../models/Application");
require("../../models/Topic");
require("../../models/Endpoint"); // might be a bad idea
require("../../models/Subscription"); // might be a bad idea
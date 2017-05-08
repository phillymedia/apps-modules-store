"use strict";

/**
 * The Philly.com store module, for use with the Philly.com and Sports Now apps.
 *
 * @module store
 */

// DEPENDENCIES
// =============================================================================
// lodash
// const { forEach } = require("lodash");
var dotenv = require("dotenv");

// CONFIG
// =============================================================================
dotenv.load({ path: ".env" });
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
if (_debug) {
	connection.once("open", function () {
		console.log("Mongoose connection open.");
	});
}
// handle errors
connection.on("error", function (err) {
	console.log("Mongoose default connection error: " + err);
	throw new Error("Unable to connect to database!");
});
// when the connection is disconnected
connection.on("disconnected", function () {
	if (_debug) {
		console.log("Mongoose default connection disconnected.");
	}
});
// if the Node process ends, close the Mongoose connection
process.on("SIGINT", function () {
	connection.close(function () {
		if (_debug) {
			console.log("Mongoose default connection disconnected through app termination.");
		}
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

// IMPORT MODULES
// =============================================================================
var feed = require("./controllers/feed");
var stats = require("./controllers/stats");
var logs = require("./controllers/logs");

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

exports.feed = feed;
exports.stats = stats;
exports.logs = logs;
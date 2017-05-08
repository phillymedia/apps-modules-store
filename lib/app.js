/**
 * The Philly.com store module, for use with the Philly.com and Sports Now apps.
 *
 * @module store
 */

// DEPENDENCIES
// =============================================================================
// lodash
// const { forEach } = require("lodash");
const dotenv = require("dotenv");

// CONFIG
// =============================================================================
dotenv.load({ path: ".env" });
const conf = require("APP/config");

// CONNECT TO DATABASE
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// database
const db = require("mongoose");

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug;

// CONNECT TO THE DATABASE
// =============================================================================
if (_debug) {
	db.set("debug", true);
}
// use ES6 promises
db.Promise = global.Promise;
// connect
const connection = db.connect(conf.database.url).connection;
if (_debug) {
	connection.once("open", () => {
		console.log("Mongoose connection open.");
	});
}
// handle errors
connection.on("error", (err) => {
	console.log(`Mongoose default connection error: ${err}`);
	throw new Error("Unable to connect to database!");
});
// when the connection is disconnected
connection.on("disconnected", () => {
	if (_debug) {
		console.log("Mongoose default connection disconnected.");
	}
});
// if the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
	connection.close(() => {
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
require("APP/models/Feed");
require("APP/models/Stat");
require("APP/models/Log");

// IMPORT MODULES
// =============================================================================
const feed = require("COMP/feed");
const stats = require("COMP/stats");
const logs = require("COMP/logs");


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

exports.feed = feed;
exports.stats = stats;
exports.logs = logs;

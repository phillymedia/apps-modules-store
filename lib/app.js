/**
 * The Philly.com store module, for use with the Philly.com and Sports Now apps.
 *
 * @module store
 */

// CONFIG
// =============================================================================
const conf = require("APP/config");
import log from "COMP/logging";

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
connection.once("open", () => {
	log.debug("Mongoose connection open.");
});
// handle errors
connection.on("error", (err) => {
	log.info(`Mongoose default connection error: ${err}`);
	throw new Error("Unable to connect to database!");
});
// when the connection is disconnected
connection.on("disconnected", () => {
	log.debug("Mongoose default connection disconnected.");
});
// if the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
	connection.close(() => {
		log.debug("Mongoose default connection disconnected through app termination.");
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
// aws models
require("APP/models/Application");
require("APP/models/Topic");
require("APP/models/Endpoint"); // might be a bad idea
require("APP/models/Subscription"); // might be a bad idea

// EXPORTS
// =============================================================================
import { sns } from "COMP/aws";
import feed from "COMP/feed";
import logs from "COMP/logs";
import stats from "COMP/stats";

export default {
	feed,
	logs,
	stats,
	sns,
};

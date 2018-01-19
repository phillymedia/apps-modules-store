// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// import conf from "APP/config";
import { debug as _debug, database as _database } from "APP/config";
import { log } from "philly-helpers";

// THIRD PARTY LIBRARIES -------------------------------
// database
import db from "mongoose";


// CONNECT TO THE DATABASE
// =============================================================================
if (_debug) {
	db.set("debug", true);
}
// use ES6 promises
db.Promise = global.Promise;
// connect
const { connection } = db.connect(_database.url);
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
export {
	db,
	connection,
};


// REGISTER MODELS
// =============================================================================
// models
require("APP/models/Detail");
require("APP/models/Feed");
require("APP/models/Stat");
require("APP/models/Log");
// aws models
require("APP/models/Application");
require("APP/models/Topic");
require("APP/models/Endpoint"); // might be a bad idea
require("APP/models/Subscription"); // might be a bad idea

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { map } from "lodash";
// APP -------------------------------
// helpers
import { log } from "philly-helpers";
// import conf from "APP/config";
import { debug as _debug, env as _env, database as _database } from "APP/config";

// THIRD PARTY LIBRARIES -------------------------------
// database
import db from "mongoose";


// CONNECT TO THE DATABASE
// =============================================================================
let autoIndex = true;
let createIndexes = false;

// set mongoose to also debug
if (_debug) {
  db.set("debug", true);
}

// set autoIndex to FALSE in production
// http://mongoosejs.com/docs/guide.html#indexes
if (_env === "production") {
  autoIndex = false;
}

// use ES6 promises
db.Promise = global.Promise;

// connect
db.connect(_database.url, { autoIndex, useMongoClient: true })
  // success
  .then((connection) => {
    // log and handle events
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
  })
  .catch((err) => {
    log.info(`Mongoose default connection error: ${err}`);
    throw new Error("Unable to connect to database!");
  });

// create indexes only if needed
if (_env === "production") {
  if (db.system.indexes.find({ name: "arn" }).count() === 0) {
    createIndexes = true;
  }
}

// export database
export {
  db,
};


// REGISTER MODELS
// =============================================================================
// feed and notification models
const detailModel = require("APP/models/Detail");
const feedModel = require("APP/models/Feed");
const logModel = require("APP/models/Log");
// aws models
const applicationModel = require("APP/models/Application");
const topicModel = require("APP/models/Topic");
const endpointModel = require("APP/models/Endpoint");
const subscriptionModel = require("APP/models/Subscription");
// stats daashboard
const statModel = require("APP/models/Stat");

// ensure indexes
if (createIndexes) {
  // create a map of ensureIndex promises
  const promises = map([
    detailModel,
    feedModel,
    statModel,
    logModel,
    applicationModel,
    topicModel,
    endpointModel,
    subscriptionModel,
    statModel,
  ], model => model.ensureIndex());
  // throw errors if any
  Promise.all(promises, (err) => {
    throw err;
  });
}

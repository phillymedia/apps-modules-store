// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { some } from "lodash";
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
  .then(() => {
    // log and handle events
    log.debug("Mongoose connection open.");
  })
  .catch((err) => {
    log.info(`Mongoose default connection error: ${err}`);
    throw new Error("Unable to connect to database!");
  });
// handle errors
db.connection.on("error", (err) => {
  log.info(`Mongoose default connection error: ${err}`);
  throw new Error("Unable to connect to database!");
});
// when the connection is disconnected
db.connection.on("disconnected", () => {
  log.debug("Mongoose default connection disconnected.");
});
// if the Node process ends, close the Mongoose connection
process
  .on("SIGINT", () => {
    db.connection.close(() => {
      log.debug("Mongoose default connection disconnected through app termination.");
      process.exit(0);
    });
  })
  .on("SIGTERM", () => {
    db.connection.close(() => {
      log.debug("Mongoose default connection disconnected through app termination.");
      process.exit(0);
    });
  });

// export database
export {
  db,
};


// REGISTER MODELS
// =============================================================================
// feed and notification models
require("APP/models/Detail");
require("APP/models/Feed");
require("APP/models/Log");
// aws models
const applicationModel = require("APP/models/Application");
require("APP/models/Topic");
require("APP/models/Endpoint");
require("APP/models/Subscription");
// stats daashboard
require("APP/models/Stat");


// Warn for lack of indexes
if (_env === "production") {
  applicationModel.collection.indexes((err, indexes) => {
    // no database
    if (err) {
      // specific error
      if (err.code === 26) {
        throw new Error("Database doesn't yet exist! Indexes will not be built.");
      }
      // otherwise
      throw err;
    }
    // no indexes
    if (!some(indexes, { key: { arn: 1 } })) {
      throw new Error("Indexes do not exist and will not be built!");
    }
  });
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _lodash = require("lodash");

var _phillyHelpers = require("philly-helpers");

var _config = require("../../config");

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CONNECT TO THE DATABASE
// =============================================================================

// import conf from "APP/config";
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
var autoIndex = true;

// THIRD PARTY LIBRARIES -------------------------------
// database

// APP -------------------------------
// helpers

var createIndexes = false;

// set mongoose to also debug
if (_config.debug) {
  _mongoose2.default.set("debug", true);
}

// set autoIndex to FALSE in production
// http://mongoosejs.com/docs/guide.html#indexes
if (_config.env === "production") {
  autoIndex = false;
}

// use ES6 promises
_mongoose2.default.Promise = global.Promise;

// connect
_mongoose2.default.connect(_config.database.url, { autoIndex: autoIndex, useMongoClient: true })
// success
.then(function (connection) {
  // log and handle events
  connection.once("open", function () {
    _phillyHelpers.log.debug("Mongoose connection open.");
  });
  // handle errors
  connection.on("error", function (err) {
    _phillyHelpers.log.info("Mongoose default connection error: " + err);
    throw new Error("Unable to connect to database!");
  });
  // when the connection is disconnected
  connection.on("disconnected", function () {
    _phillyHelpers.log.debug("Mongoose default connection disconnected.");
  });
  // if the Node process ends, close the Mongoose connection
  process.on("SIGINT", function () {
    connection.close(function () {
      _phillyHelpers.log.debug("Mongoose default connection disconnected through app termination.");
      process.exit(0);
    });
  });
}).catch(function (err) {
  _phillyHelpers.log.info("Mongoose default connection error: " + err);
  throw new Error("Unable to connect to database!");
});

// create indexes only if needed
if (_config.env === "production") {
  if (_mongoose2.default.system.indexes.find({ name: "arn" }).count() === 0) {
    createIndexes = true;
  }
}

// export database
exports.db = _mongoose2.default;

// REGISTER MODELS
// =============================================================================
// feed and notification models

var detailModel = require("../../models/Detail");
var feedModel = require("../../models/Feed");
var logModel = require("../../models/Log");
// aws models
var applicationModel = require("../../models/Application");
var topicModel = require("../../models/Topic");
var endpointModel = require("../../models/Endpoint");
var subscriptionModel = require("../../models/Subscription");
// stats daashboard
var statModel = require("../../models/Stat");

// ensure indexes
if (createIndexes) {
  // create a map of ensureIndex promises
  var promises = (0, _lodash.map)([detailModel, feedModel, statModel, logModel, applicationModel, topicModel, endpointModel, subscriptionModel, statModel], function (model) {
    return model.ensureIndex();
  });
  // throw errors if any
  Promise.all(promises, function (err) {
    throw err;
  });
}
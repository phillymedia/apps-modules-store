"use strict";

var _db = require("../controllers/db");

var schemaName = "Subscription";

// create the schema
var Schema = new _db.db.Schema({
  // arn
  arn: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  // topic arn
  topic: {
    type: String,
    required: true
  },
  // endpoint arn
  endpoint: {
    type: String,
    required: true
  },
  // protocol
  protocol: {
    type: String,
    required: true
  },
  // username (optional)
  username: {
    type: String
  }
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
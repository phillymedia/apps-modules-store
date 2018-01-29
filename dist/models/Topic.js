"use strict";

var _db = require("../controllers/db");

var schemaName = "Topic";

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
  // attributes
  attributes: {
    type: Object,
    required: true
  }
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
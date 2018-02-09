"use strict";

var _db = require("../controllers/db");

var schemaName = "Log";

// create the schema
var Schema = new _db.db.Schema({
  id: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  target: {
    type: String,
    // enum: conf.schema.target,
    required: true
  },
  message: {
    type: String,
    required: true
  }
},
// collection options
{
  // capped to 10MB and 100 items
  capped: {
    size: 10485760,
    max: 100,
    autoIndexId: true
  }
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
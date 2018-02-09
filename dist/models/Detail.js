"use strict";

var _db = require("../controllers/db");

var schemaName = "Detail";

// create the schema
var Schema = new _db.db.Schema({
  // time stamp for the cache
  expireAt: {
    type: Date,
    default: Date.now
  },
  // article id for easy searching
  id: {
    type: Number,
    required: true,
    index: {
      unique: true
    }
  },
  // actual content
  content: {
    type: Object,
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

// add expiring index
Schema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
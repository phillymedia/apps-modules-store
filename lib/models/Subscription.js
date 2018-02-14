import { endOfWeek } from "philly-helpers";
import { db as mongoose } from "COMP/db";
const schemaName = "Subscription";

// create the schema
const Schema = new mongoose.Schema({
  // arn
  arn: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  // topic arn
  topic: {
    type: String,
    required: true,
  },
  // endpoint arn
  endpoint: {
    type: String,
    required: true,
  },
  // protocol
  protocol: {
    type: String,
    required: true,
  },
  // username (optional)
  username: {
    type: String,
  },
  // time stamp for the cache
  expireAt: {
    type: Date,
    default: endOfWeek,
    index: {
      expireAfterSeconds: 0,
    },
  },
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

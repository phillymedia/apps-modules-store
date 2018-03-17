import { db as mongoose } from "COMP/db";
const schemaName = "Feed";

// create the schema
const Schema = new mongoose.Schema({
  // time stamp for the cache
  expireAt: {
    type: Date,
    default: Date.now,
    index: {
      expireAfterSeconds: 0,
    },
  },
  // watch, app?
  source: {
    type: String,
    required: true,
  },
  // articles, games, tweets? detail as separate?
  type: {
    type: String,
    required: true,
  },
  // sports, news, business, health
  // detail as a name
  name: {
    type: String,
    required: true,
  },
  // actual content
  content: {
    type: Object,
    required: true,
  },

  // Version of the data - important because different API versions have been rolled out, and
  // their respective endpoints generate different datasets.
  version: {
    type: String,
    required: false
  }
});

// add compound index
Schema.index({ name: 1, type: 1, source: 1, version: 1}, { sparse: true });

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

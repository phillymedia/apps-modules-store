"use strict";

var conf = require("../config"); // eslint-disable-line no-unused-vars
var mongoose = require("../app").db;
var schemaName = "Topic";

// create the schema
var Schema = new mongoose.Schema({
	// arn
	TopicArn: {
		type: String,
		required: true
	},
	// attributes
	Attributes: {
		type: Object,
		required: true
	}
});

// Create a compound unique index over _userId and document number
// Schema.index({ "_id": 1, "project_alias": 1 }, { unique: true });


// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);
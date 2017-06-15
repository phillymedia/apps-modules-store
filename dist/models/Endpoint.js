"use strict";

var conf = require("../config"); // eslint-disable-line no-unused-vars
var mongoose = require("../app").db;
var schemaName = "Endpoint";

// create the schema
var Schema = new mongoose.Schema({
	// arn
	arn: {
		type: String,
		required: true
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
module.exports = mongoose.model(schemaName, Schema);
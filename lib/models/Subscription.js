const conf = require("APP/config"); // eslint-disable-line no-unused-vars
const mongoose = require("MAIN").db;
const schemaName = "Subscription";

// create the schema
const Schema = new mongoose.Schema({
	// arn
	arn: {
		type: String,
		required: true,
	},
	// attributes
	attributes: {
		type: Object,
		required: true,
	},
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

"use strict";

var _db = require("../controllers/db");

var schemaName = "Log";

// create the schema
var Schema = new _db.db.Schema({
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
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
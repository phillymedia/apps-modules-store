import { db as mongoose } from "COMP/db";
const schemaName = "Log";

// create the schema
const Schema = new mongoose.Schema({
	article_id: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	target: {
		type: String,
		// enum: conf.schema.target,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

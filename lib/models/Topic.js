import { db as mongoose } from "COMP/db";
const schemaName = "Topic";

// create the schema
const Schema = new mongoose.Schema({
	// arn
	TopicArn: {
		type: String,
		required: true,
		index: {
			unique: true,
		},
	},
	// attributes
	Attributes: {
		type: Object,
		required: true,
	},
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

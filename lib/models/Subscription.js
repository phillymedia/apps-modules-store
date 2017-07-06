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
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

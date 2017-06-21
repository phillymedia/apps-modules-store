import { db as mongoose } from "COMP/db";
const schemaName = "Detail";

// create the schema
const Schema = new mongoose.Schema({
	// time stamp for the cache
	expireAt: {
		type: Date,
		default: Date.now,
	},
	// article id for easy searching
	id: {
		type: Number,
		required: true,
		index: {
			unique: true,
		},
	},
	// actual content
	content: {
		type: Object,
		required: true,
	},
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = mongoose.model(schemaName, Schema);

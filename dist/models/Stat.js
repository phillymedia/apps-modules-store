"use strict";

var _db = require("../controllers/db");

var schemaName = "Stat";

// create the schema
var Schema = new _db.db.Schema({
	// time stamp for the cache
	expireAt: {
		type: Date,
		default: Date.now
	},
	// sports, news, business, health
	// detail as a name
	name: {
		type: String,
		required: true
	},
	// actual content
	content: {
		type: Object,
		required: true
	}
},
// mongoose assumes the collection will be the plural of the schema name
// e.g., Log => logs
// specify collection name otherwise
{
	collection: "notif_stats"
});

// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

// save as a model
module.exports = _db.db.model(schemaName, Schema);
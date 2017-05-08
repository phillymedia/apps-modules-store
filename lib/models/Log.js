const conf = require("APP/config"); // eslint-disable-line no-unused-vars
const mongoose = require("MAIN").db;
const schemaName = "Log";

// create the schema
const Schema = new mongoose.Schema({
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

// Create a compound unique index over _userId and document number
// Schema.index({ "_id": 1, "project_alias": 1 }, { unique: true });


// this is default true, but let's make sure
Schema.set("validateBeforeSave", true);

/*
Schema.pre("save", (next) => {
	var doc = this;
	// You have to know the settings_id, for me, I store it in memory: app.current.settings.id
	Settings.findByIdAndUpdate( settings_id, { $inc: { nextSeqNumber: 1 } }, (err, settings) => {
		if (err) next(err);
		// substract 1 because I need the 'current' sequence number, not the next
		doc.number = settings.nextSeqNumber - 1;
		next();
	});
});
//*/

// before saving, push comments_or_summary_new value
/*
Schema.pre("save", (next) => {
	var log = this;
	console.log("Saving...", log);
	return next();
})
//*/

/*
// before saving, push comments_or_summary_new value
Schema.pre("update", (next) => {
	var update = this;
	var comments_or_summary = update._update["$set"].comments_or_summary;
	console.log("Saving...", comments_or_summary);
	return next();
	// if we're not updating the comments, skip it
	if (!comments_or_summary) {
		return next();
	}
	// otherwise...
	update._update["$set"].comments_or_summary = hash;
	next();
});
//*/

// save as a model
module.exports = mongoose.model(schemaName, Schema);

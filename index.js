/**
 * PHILLY STORE APP
 *
 * Hopefully reusable class of functions.
 **/

// DEPENDENCIES
// =============================================================================
// lodash
const _ = require("lodash");
const dotenv = require("dotenv");

// CONFIG
// =============================================================================
dotenv.load({ path: ".env" });
const conf = require("./config");

// REGISTER MODELS
// =============================================================================
// models
_.forEach(conf.models, (path) => {
	require(path);
});

// DEPENDENCIES
// =============================================================================
const feed = require("./controllers/feed");
const stats = require("./controllers/stats");
const logs = require("./controllers/logs");


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	// feed store
	feed,
	// logs store
	logs,
	// stats store
	stats,
};

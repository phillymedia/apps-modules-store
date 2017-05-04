/**
 * The Philly.com store module, for use with the Philly.com and Sports Now apps.
 *
 * @module store
 */

// DEPENDENCIES
// =============================================================================
// lodash
const _ = require("lodash");
const dotenv = require("dotenv");

// CONFIG
// =============================================================================
dotenv.load({ path: ".env" });
const conf = require("./src/config");

// REGISTER MODELS
// =============================================================================
// models
_.forEach(conf.models, (path) => {
	require(path);
});

// DEPENDENCIES
// =============================================================================
const feed = require("./src/controllers/feed");
const stats = require("./src/controllers/stats");
const logs = require("./src/controllers/logs");


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

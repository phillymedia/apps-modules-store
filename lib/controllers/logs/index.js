/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
// const conf = require("APP/config");
/*
const admin = require("./admin");
*/
const core = require("./core");

// third-party
// const { parallel } = require("async");


// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
// const _debug = conf.debug;


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	get: core.findAll,
	add: core.add,
	exists: core.exists,
	remove: core.remove,
};

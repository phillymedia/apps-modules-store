"use strict";

/**
 * STORE APP
 * configure settings
*/

// grab environment variables
// grab environment
var env = process.env.NODE_ENV
// npm
|| process.env.npm_config_environment || process.env.npm_package_config_environment
// default
|| "production";
// grab debug mode
var debug = process.env.DEBUG
// (we use a separate debugmode process so as not to turn on the debug mode in OTHER modules)
|| process.env.DEBUGMODE === "true"
// npm
|| process.env.npm_config_debugmode === "true";

// import config based on environment
var Main = require("./" + env);
// add debug from command line
Main.debug = debug;
// print information about environment.
if (Main.debug) {
	console.log("Running store app in", Main.env, "mode. Debug is on.");
}
// export completed config file
module.exports = Main;
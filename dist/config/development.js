"use strict";

/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// import the DEV version of global settings
var Main = require("./global");

// TEST
// =============================================================================
// change settings for development
// SETTINGS -------------------------------
Main.env = "development";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 10;

// STORE -------------------------------
// the store settings
// variables
var shortExpires = 15;
var longExpires = 60;
Main.store.sports.expiresInMinutes = {
	combined: shortExpires,
	games: shortExpires,
	tweets: shortExpires
};
Main.store.main.expiresInMinutes = shortExpires;
Main.store.watch.expiresInMinutes = shortExpires;
Main.store.today.expiresInMinutes = shortExpires;
Main.store.admin.expiresInMinutes = longExpires;

// EXPORT
// =============================================================================
module.exports = Main;
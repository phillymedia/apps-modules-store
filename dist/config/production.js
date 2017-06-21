"use strict";

/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// import global settings
var Main = require("./global");

// TEST
// =============================================================================
// change settings for production
// SETTINGS -------------------------------
Main.env = "production";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 40;

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
Main.store.detail.expiresInMinutes = longExpires;

// EXPORT
// =============================================================================
module.exports = Main;
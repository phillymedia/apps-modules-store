/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// import global settings
const Main = require("./global");

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
const shortExpires = 15;
const longExpires = 60;
Main.store.sports.expiresInMinutes = {
	combined: shortExpires,
	games: shortExpires,
	tweets: shortExpires,
};
Main.store.main.expiresInMinutes = shortExpires;
Main.store.search.expiresInMinutes = longExpires;
Main.store.watch.expiresInMinutes = shortExpires;
Main.store.today.expiresInMinutes = shortExpires;
Main.store.admin.expiresInMinutes = longExpires;
Main.store.detail.expiresInMinutes = longExpires;


// EXPORT
// =============================================================================
module.exports = Main;

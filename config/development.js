/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// import the DEV version of global settings
const Main = require("./global");

// TEST
// =============================================================================
// change settings for development
// SETTINGS -------------------------------
Main.env = "development";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 10;
Main.database.url = `mongodb://${Main.database.user}:${process.env.MONGO_DB_DEV_PASS}@${Main.database.server}:${Main.database.port}/${Main.database.db}`;

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
Main.store.watch.expiresInMinutes = shortExpires;
Main.store.today.expiresInMinutes = shortExpires;
Main.store.admin.expiresInMinutes = longExpires;


// EXPORT
// =============================================================================
module.exports = Main;

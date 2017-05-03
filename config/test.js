/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// import the DEV version of global settings
const Main = require("./development");

// TEST
// =============================================================================
// change settings for test
// SETTINGS -------------------------------
Main.env = "test";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 10;
Main.database.url = `mongodb://${Main.database.user}:${process.env.MONGO_DB_TEST_PASS}@${Main.database.server}:${Main.database.port}/${Main.database.db}`;


// EXPORT
// =============================================================================
module.exports = Main;

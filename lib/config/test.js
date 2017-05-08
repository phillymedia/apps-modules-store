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


// EXPORT
// =============================================================================
module.exports = Main;

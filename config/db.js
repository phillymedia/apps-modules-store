/**
* STORE APP
* configure settings
* Global settings, imported by other configs.
**/

// third-party libraries
// const _ = require("lodash");
// this module
const Main = {};

// DB -------------------------------
Main.database = {};
Main.database.server = "localhost";
Main.database.port = 27017;
Main.database.db = "notifications";
Main.database.logs = {};
Main.database.logs.view = 5;
Main.database.user = "notifsUser";


// EXPORT
// =============================================================================
module.exports = Main;

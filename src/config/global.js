/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// dependencies
// import _ from "lodash";
// import app from "./app";
const { forEach } = require("lodash");
const db = require("./db");
const store = require("./store");
const models = require("./models");

// create Main
const Main = {};

// DATABASE SETTINGS
// ==============
// add db settings
forEach(db, (setting, key) => {
	Main[key] = setting;
});

// STORE SETTINGS
// =============================================================================
// add store settings
forEach(store, (setting, key) => {
	Main[key] = setting;
});


// MODEL SETTINGS
// =============================================================================
// add model settings
forEach(models, (setting, key) => {
	Main[key] = setting;
});


// EXPORT
// =============================================================================
module.exports = Main;

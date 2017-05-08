"use strict";

/**
* STORE APP
* configure settings
* Sets up the Node server with Express.
**/

// dependencies
// import _ from "lodash";
// import app from "./app";
var _require = require("lodash"),
    forEach = _require.forEach;

var db = require("./db");
var store = require("./store");

// create Main
var Main = {};

// DATABASE SETTINGS
// ==============
// add db settings
forEach(db, function (setting, key) {
	Main[key] = setting;
});

// STORE SETTINGS
// =============================================================================
// add store settings
forEach(store, function (setting, key) {
	Main[key] = setting;
});

// EXPORT
// =============================================================================
module.exports = Main;
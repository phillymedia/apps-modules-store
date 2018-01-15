"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodash = require("lodash");

var _db = require("./db");

var _db2 = _interopRequireDefault(_db);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create Main
var Main = {};

// DATABASE SETTINGS
// ==============
// add db settings
// dependencies
// import _ from "lodash";
// import app from "./app";
(0, _lodash.forEach)(_db2.default, function (setting, key) {
	Main[key] = setting;
});

// STORE SETTINGS
// =============================================================================
// add store settings
(0, _lodash.forEach)(_store2.default, function (setting, key) {
	Main[key] = setting;
});

// EXPORT
// =============================================================================
exports.default = Main;
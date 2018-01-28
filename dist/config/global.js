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

// APP SETTINGS
// =============================================================================
// dependencies
// import _ from "lodash";
// import app from "./app";
(0, _lodash.forEach)([_db2.default, _store2.default], function (settings) {
  return (0, _lodash.forEach)(settings, function (setting, key) {
    Main[key] = setting;
  });
});

// EXPORT
// =============================================================================
exports.default = Main;
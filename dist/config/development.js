"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TEST
// =============================================================================
// change settings for development
// SETTINGS -------------------------------
_global2.default.env = "development";

// DB -------------------------------
// put it all together...
// import global settings
_global2.default.database.logs.limit = 10;

// STORE -------------------------------
// the store settings
// variables
// 15 minutes
var shortExpires = 15;
// one hour
var longExpires = 60;
// one day
var vLongExpires = 1440;
_global2.default.store.sports.expiresInMinutes = {
  combined: shortExpires,
  articles: shortExpires,
  games: shortExpires,
  tweets: shortExpires
};
_global2.default.store.sportsLegacy.v1.expiresInMinutes = {
  combined: shortExpires,
  articles: shortExpires,
  games: shortExpires,
  tweets: shortExpires
};
_global2.default.store.main.expiresInMinutes = shortExpires;
_global2.default.store.mainLegacy.v1.expiresInMinutes = shortExpires;
_global2.default.store.search.expiresInMinutes = vLongExpires;
_global2.default.store.searchLegacy.v1.expiresInMinutes = vLongExpires;
_global2.default.store.sections.expiresInMinutes = vLongExpires;
_global2.default.store.watch.expiresInMinutes = shortExpires;
_global2.default.store.today.expiresInMinutes = shortExpires;
_global2.default.store.admin.expiresInMinutes = longExpires;
_global2.default.store.detail.expiresInMinutes = longExpires;

// EXPORT
// =============================================================================
exports.default = _global2.default;

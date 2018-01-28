"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("async");

var _feed = require("./feed");

var _feed2 = _interopRequireDefault(_feed);

var _games = require("./games");

var _games2 = _interopRequireDefault(_games);

var _tweets = require("./tweets");

var _tweets2 = _interopRequireDefault(_tweets);

var _search = require("./search");

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Clear store - legacy.
*
* @param {function} callback - A callback function..
*/
function clearV1(callback) {
  // combined feed, games, tweets
  (0, _async.parallel)([_feed2.default.removeV1, _games2.default.removeV1, _tweets2.default.removeV1], callback);
}

/**
* Clear store.
*
* @param {function} callback - A callback function.
*/
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY LIBRARIES  -------------------------------
function clear(callback) {
  // combined feed, games, tweets
  (0, _async.parallel)([_feed2.default.remove, _games2.default.remove, _tweets2.default.remove], callback);
}

// EXPORT
// =============================================================================

exports.default = {
  getFeed: _feed2.default.get,
  getFeedV1: _feed2.default.getV1,
  setFeed: _feed2.default.set,
  setFeedV1: _feed2.default.setV1,
  getGames: _games2.default.get,
  setGames: _games2.default.set,
  getTweets: _tweets2.default.get,
  setTweets: _tweets2.default.set,
  getSearch: _search2.default.get,
  getSearchV1: _search2.default.getV1,
  setSearch: _search2.default.set,
  setSearchV1: _search2.default.setV1,
  removeSearch: _search2.default.remove,
  removeSearchV1: _search2.default.removeV1,
  clear: clear,
  clearV1: clearV1
};
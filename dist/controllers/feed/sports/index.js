"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("async");

var _feed = require("./feed");

var _feed2 = _interopRequireDefault(_feed);

var _full = require("./articles/full");

var _full2 = _interopRequireDefault(_full);

var _full3 = require("./articles/legacy/v1/full");

var _full4 = _interopRequireDefault(_full3);

var _brief = require("./articles/brief");

var _brief2 = _interopRequireDefault(_brief);

var _brief3 = require("./articles/legacy/v1/brief");

var _brief4 = _interopRequireDefault(_brief3);

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
  // combined feed, articles, games, tweets
  (0, _async.parallel)([_feed2.default.removeV1, _full2.default.removeV1, _games2.default.removeV1, _tweets2.default.removeV1], callback);
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
  // combined feed, articles, games, tweets
  (0, _async.parallel)([_feed2.default.remove, _full2.default.remove, _games2.default.remove, _tweets2.default.remove], callback);
}

// EXPORT
// =============================================================================

exports.default = {
  // combined
  getFeed: _feed2.default.get,
  getFeedV1: _feed2.default.getV1,
  setFeed: _feed2.default.set,
  setFeedV1: _feed2.default.setV1,
  // articles
  getArticles: _full2.default.get,
  getArticlesV1: _full4.default.get,
  setArticles: _full2.default.set,
  setArticlesV1: _full4.default.set,
  removeArticles: _full2.default.remove,
  removeArticlesV1: _full4.default.remove,
  // articles - brief
  getArticlesBrief: _brief2.default.get,
  getArticlesBriefV1: _brief4.default.get,
  setArticlesBrief: _brief2.default.set,
  setArticlesBriefV1: _brief4.default.set,
  removeArticlesBrief: _brief2.default.remove,
  removeArticlesBriefV1: _brief4.default.remove,
  // games
  getGames: _games2.default.get,
  setGames: _games2.default.set,
  // tweets
  getTweets: _tweets2.default.get,
  setTweets: _tweets2.default.set,
  // search
  getSearch: _search2.default.get,
  getSearchV1: _search2.default.getV1,
  setSearch: _search2.default.set,
  setSearchV1: _search2.default.setV1,
  removeSearch: _search2.default.remove,
  removeSearchV1: _search2.default.removeV1,
  // clear combined data
  clear: clear,
  clearV1: clearV1
};

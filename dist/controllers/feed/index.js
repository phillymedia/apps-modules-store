"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _async = require("async");

var _philly = require("./philly");

var _philly2 = _interopRequireDefault(_philly);

var _sports = require("./sports");

var _sports2 = _interopRequireDefault(_sports);

var _today = require("./today");

var _today2 = _interopRequireDefault(_today);

var _watch = require("./watch");

var _watch2 = _interopRequireDefault(_watch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
 * Flush stats - legacy.
 *
 * @param {string} name - Content identifier.
 * @param {function} callback - A callback function.
 * @return {function}
 */

// SIBLINGS -------------------------------
/*
const admin = require("./admin");
*/
function clearArticlesPhillyV1(name, callback) {
  // run parallel
  (0, _async.parallel)([
  // individual calls
  function (next) {
    return _philly2.default.removeArticlesV1(name, next);
  }, function (next) {
    return _watch2.default.removeArticlesPhillyV1(name, next);
  }, function (next) {
    return _today2.default.removeArticlesPhillyV1(name, next);
  }],
  // ready to re-create the caches
  callback);
}

/**
 * Flush stats.
 *
 * @param {string} name - Content identifier.
 * @param {function} callback - A callback function.
 * @return {function}
 */
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
function clearArticlesPhilly(name, callback) {
  // run parallel
  (0, _async.parallel)([
  // individual calls
  function (next) {
    return _philly2.default.removeArticles(name, next);
  }, function (next) {
    return _watch2.default.removeArticlesPhilly(name, next);
  }, function (next) {
    return _today2.default.removeArticlesPhilly(name, next);
  }],
  // ready to re-create the caches
  callback);
}

/*
// ADMIN
// =============================================================================
// SES COUNT  -------------------------------
// get
Main.prototype.getCurrSesCount = admin.getCurrSesCount;
// set
Main.prototype.setCurrSesCount = admin.setCurrSesCount;
// SES DATA  -------------------------------
// get
Main.prototype.getCurrSesData = admin.getCurrSesData;
// set
Main.prototype.setCurrSesData = admin.setCurrSesData;
// TERMS  -------------------------------
// get
Main.prototype.getCurrTerms = admin.getCurrTerms;
// set
Main.prototype.setCurrTerms = admin.setCurrTerms;
// flush
Main.prototype.flushCurrTerms = admin.flushCurrTerms;
// SUBSCRIPTIONS  -------------------------------
// get
Main.prototype.getCurrSubs = admin.getCurrSubs;
// set
Main.prototype.setCurrSubs = admin.setCurrSubs
// flush
Main.prototype.flushCurrSubs = admin.flushCurrSubs;
// ENDPOINTS  -------------------------------
// get
Main.prototype.getCurrEndpoints = admin.getCurrEndpoints;
// set
Main.prototype.setCurrEndpoints = admin.setCurrEndpoints;
// flush
Main.prototype.flushCurrEndpoints = admin.flushCurrEndpoints;
// MISCELLANEOUS  -------------------------------
// flush all stores
Main.prototype.flushStores = admin.flushStores;
*/

// EXPORTS
// =============================================================================

exports.default = {
  // philly.com
  getArticlesPhilly: _philly2.default.getArticles,
  setArticlesPhilly: _philly2.default.setArticles,
  removeArticlesPhilly: _philly2.default.removeArticles,
  getArticlesPhillyBrief: _philly2.default.getArticlesBrief,
  setArticlesPhillyBrief: _philly2.default.setArticlesBrief,
  getArticlesPhillyV1: _philly2.default.getArticlesV1,
  setArticlesPhillyV1: _philly2.default.setArticlesV1,
  removeArticlesPhillyV1: _philly2.default.removeArticlesV1,
  getArticlesPhillyBriefV1: _philly2.default.getArticlesBriefV1,
  setArticlesPhillyBriefV1: _philly2.default.setArticlesBriefV1,
  // search
  getSearchPhilly: _philly2.default.getSearch,
  setSearchPhilly: _philly2.default.setSearch,
  removeSearchPhilly: _philly2.default.removeSearch,
  clearSearchPhilly: _philly2.default.removeSearch,
  getSearchPhillyV1: _philly2.default.getSearchV1,
  setSearchPhillyV1: _philly2.default.setSearchV1,
  removeSearchPhillyV1: _philly2.default.removeSearchV1,
  clearSearchPhillyV1: _philly2.default.removeSearchV1,
  // sections
  getSectionsPhilly: _philly2.default.getSections,
  setSectionsPhilly: _philly2.default.setSections,
  removeSectionsPhilly: _philly2.default.removeSections,
  clearSectionsPhilly: _philly2.default.removeSections,
  getSectionsPhillyV1: _philly2.default.getSectionsV1,
  setSectionsPhillyV1: _philly2.default.setSectionsV1,
  removeSectionsPhillyV1: _philly2.default.removeSectionsV1,
  clearSectionsPhillyV1: _philly2.default.removeSectionsV1,
  // sports now
  getSportsFeed: _sports2.default.getFeed,
  setSportsFeed: _sports2.default.setFeed,
  getSportsGames: _sports2.default.getGames,
  setSportsGames: _sports2.default.setGames,
  getSportsTweets: _sports2.default.getTweets,
  setSportsTweets: _sports2.default.setTweets,
  clearSports: _sports2.default.clear,
  getSportsFeedV1: _sports2.default.getFeedV1,
  setSportsFeedV1: _sports2.default.setFeedV1,
  clearSportsV1: _sports2.default.clearV1,
  // search
  getSearchSports: _sports2.default.getSearch,
  setSearchSports: _sports2.default.setSearch,
  removeSearchSports: _sports2.default.removeSearch,
  clearSearchSports: _sports2.default.removeSearch,
  getSearchSportsV1: _sports2.default.getSearchV1,
  setSearchSportsV1: _sports2.default.setSearchV1,
  removeSearchSportsV1: _sports2.default.removeSearchV1,
  clearSearchSportsV1: _sports2.default.removeSearchV1,
  // today
  getArticlesTodayPhilly: _today2.default.getArticlesPhilly,
  setArticlesTodayPhilly: _today2.default.setArticlesPhilly,
  // watch
  getArticlesWatchPhilly: _watch2.default.getArticlesPhilly,
  setArticlesWatchPhilly: _watch2.default.setArticlesPhilly,
  // clear articles
  clearArticlesPhilly: clearArticlesPhilly,
  clearArticlesPhillyV1: clearArticlesPhillyV1
};
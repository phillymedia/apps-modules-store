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
 * Flush stats.
 *
 * @method clearStats
 * @param {string} name						Content identifier.
 * @param {Function} callback				A callback function.
 * @return {Function}
**/

// SIBLINGS -------------------------------
/*
const admin = require("./admin");
*/
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

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
exports.default = {
	// philly.com
	getArticlesPhilly: _philly2.default.getArticles,
	setArticlesPhilly: _philly2.default.setArticles,
	removeArticlesPhilly: _philly2.default.removeArticles,
	getArticlesPhillyBrief: _philly2.default.getArticlesBrief,
	setArticlesPhillyBrief: _philly2.default.setArticlesBrief,
	// sports now
	getSportsFeed: _sports2.default.getFeed,
	setSportsFeed: _sports2.default.setFeed,
	getSportsGames: _sports2.default.getGames,
	setSportsGames: _sports2.default.setGames,
	getSportsTweets: _sports2.default.getTweets,
	setSportsTweets: _sports2.default.setTweets,
	clearSports: _sports2.default.clear,
	// today
	getArticlesTodayPhilly: _today2.default.getArticlesPhilly,
	setArticlesTodayPhilly: _today2.default.setArticlesPhilly,
	// watch
	getArticlesWatchPhilly: _watch2.default.getArticlesPhilly,
	setArticlesWatchPhilly: _watch2.default.setArticlesPhilly,
	// clear articles
	clearArticlesPhilly: clearArticlesPhilly
};
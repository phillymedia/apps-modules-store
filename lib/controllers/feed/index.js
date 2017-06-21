// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { parallel } from "async";
// SIBLINGS -------------------------------
/*
const admin = require("./admin");
*/
import philly from "./philly";
import sports from "./sports";
import today from "./today";
import watch from "./watch";


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
function clearArticlesPhilly(name, callback) {
	// run parallel
	parallel([
	// individual calls
		next => philly.removeArticles(name, next),
		next => watch.removeArticlesPhilly(name, next),
		next => today.removeArticlesPhilly(name, next),
	],
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

export default {
	// philly.com
	getArticlesPhilly: philly.getArticles,
	setArticlesPhilly: philly.setArticles,
	removeArticlesPhilly: philly.removeArticles,
	getArticlesPhillyBrief: philly.getArticlesBrief,
	setArticlesPhillyBrief: philly.setArticlesBrief,
	// sports now
	getSportsFeed: sports.getFeed,
	setSportsFeed: sports.setFeed,
	getSportsGames: sports.getGames,
	setSportsGames: sports.setGames,
	getSportsTweets: sports.getTweets,
	setSportsTweets: sports.setTweets,
	clearSports: sports.clear,
	// today
	getArticlesTodayPhilly: today.getArticlesPhilly,
	setArticlesTodayPhilly: today.setArticlesPhilly,
	// watch
	getArticlesWatchPhilly: watch.getArticlesPhilly,
	setArticlesWatchPhilly: watch.setArticlesPhilly,
	// clear articles
	clearArticlesPhilly,
};

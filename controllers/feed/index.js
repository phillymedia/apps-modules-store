/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
// const conf = require("../../config");
/*
const admin = require("./admin");
*/
const philly = require("./philly");
const sports = require("./sports");
const today = require("./today");
const watch = require("./watch");


// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
// const _debug = conf.debug;


/*
* PRIVATE PROPERTIES
* const _privateBar;
*/


/*
* PRIVATE METHODS
* function _privateBar(){ const self = this; return this.foo; }
*/


/*
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
*/

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

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	// philly.com
	getArticlesPhilly: philly.getArticles,
	setArticlesPhilly: philly.setArticles,
	getArticlesPhillyBrief: philly.getArticlesBrief,
	setArticlesPhillyBrief: philly.setArticlesBrief,
	// sports now
	getSportsFeed: sports.getFeed,
	setSportsFeed: sports.setFeed,
	getSportsGames: philly.getGames,
	setSportsGames: philly.setGames,
	getSportsTweets: philly.getTweets,
	setSportsTweets: philly.setTweets,
	// today
	getArticlesTodayPhilly: today.getArticlesPhilly,
	setArticlesTodayPhilly: today.setArticlesPhilly,
	// watch
	getArticlesWatchPhilly: watch.getArticlesPhilly,
	setArticlesWatchPhilly: watch.setArticlesPhilly,
};

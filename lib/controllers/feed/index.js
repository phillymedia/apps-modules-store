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
 * Flush stats - legacy.
 *
 * @param {string} name - Content identifier.
 * @param {function} callback - A callback function.
 * @return {function}
 */
function clearArticlesPhillyV1(name, callback) {
  // run parallel
  parallel(
    [
    // individual calls
      next => philly.removeArticlesV1(name, next),
      next => watch.removeArticlesPhillyV1(name, next),
      next => today.removeArticlesPhillyV1(name, next),
    ],
    // ready to re-create the caches
    callback,
  );
}

/**
 * Flush stats.
 *
 * @param {string} name - Content identifier.
 * @param {function} callback - A callback function.
 * @return {function}
 */
function clearArticlesPhilly(name, callback) {
  // run parallel
  parallel(
    [
    // individual calls
      next => philly.removeArticles(name, next),
      next => watch.removeArticlesPhilly(name, next),
      next => today.removeArticlesPhilly(name, next),
    ],
    // ready to re-create the caches
    callback,
  );
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
  getArticlesPhillyV1: philly.getArticlesV1,
  setArticlesPhillyV1: philly.setArticlesV1,
  removeArticlesPhillyV1: philly.removeArticlesV1,
  getArticlesPhillyBriefV1: philly.getArticlesBriefV1,
  setArticlesPhillyBriefV1: philly.setArticlesBriefV1,
  // search
  getSearchPhilly: philly.getSearch,
  setSearchPhilly: philly.setSearch,
  removeSearchPhilly: philly.removeSearch,
  clearSearchPhilly: philly.removeSearch,
  getSearchPhillyV1: philly.getSearchV1,
  setSearchPhillyV1: philly.setSearchV1,
  removeSearchPhillyV1: philly.removeSearchV1,
  clearSearchPhillyV1: philly.removeSearchV1,
  // sections
  getSectionsPhilly: philly.getSections,
  setSectionsPhilly: philly.setSections,
  removeSectionsPhilly: philly.removeSections,
  clearSectionsPhilly: philly.removeSections,
  getSectionsPhillyV1: philly.getSectionsV1,
  setSectionsPhillyV1: philly.setSectionsV1,
  removeSectionsPhillyV1: philly.removeSectionsV1,
  clearSectionsPhillyV1: philly.removeSectionsV1,
  // sports now
  getSportsFeed: sports.getFeed,
  setSportsFeed: sports.setFeed,
  getArticlesSports: sports.getArticles,
  setArticlesSports: sports.setArticles,
  getArticlesSportsBrief: sports.getArticlesBrief,
  setArticlesSportsBrief: sports.setArticlesBrief,
  getSportsGames: sports.getGames,
  setSportsGames: sports.setGames,
  getSportsTweets: sports.getTweets,
  setSportsTweets: sports.setTweets,
  clearSports: sports.clear,
  getSportsFeedV1: sports.getFeedV1,
  setSportsFeedV1: sports.setFeedV1,
  getArticlesSportsV1: sports.getArticlesV1,
  setArticlesSportsV1: sports.setArticlesV1,
  getArticlesSportsBriefV1: sports.getArticlesBriefV1,
  setArticlesSportsBriefV1: sports.setArticlesBriefV1,
  clearSportsV1: sports.clearV1,
  // search
  getSearchSports: sports.getSearch,
  setSearchSports: sports.setSearch,
  removeSearchSports: sports.removeSearch,
  clearSearchSports: sports.removeSearch,
  getSearchSportsV1: sports.getSearchV1,
  setSearchSportsV1: sports.setSearchV1,
  removeSearchSportsV1: sports.removeSearchV1,
  clearSearchSportsV1: sports.removeSearchV1,
  // today
  getArticlesTodayPhilly: today.getArticlesPhilly,
  setArticlesTodayPhilly: today.setArticlesPhilly,
  // watch
  getArticlesWatchPhilly: watch.getArticlesPhilly,
  setArticlesWatchPhilly: watch.setArticlesPhilly,
  // clear articles
  clearArticlesPhilly,
  clearArticlesPhillyV1,
};

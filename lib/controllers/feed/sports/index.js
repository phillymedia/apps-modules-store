// DEPENDENCIES
// =============================================================================
// THIRD-PARTY LIBRARIES  -------------------------------
import { parallel } from "async";
import feed from "./feed";
import articles from "./articles/full";
import articlesV1 from "./articles/legacy/v1/full";
import articlesBrief from "./articles/brief";
import articlesBriefV1 from "./articles/legacy/v1/brief";
import games from "./games";
import tweets from "./tweets";
import search from "./search";


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
  parallel([
    feed.removeV1,
    articles.removeV1,
    games.removeV1,
    tweets.removeV1,
  ], callback);
}

/**
 * Clear store.
*
 * @param {function} callback - A callback function.
 */
function clear(callback) {
  // combined feed, articles, games, tweets
  parallel([
    feed.remove,
    articles.remove,
    games.remove,
    tweets.remove,
  ], callback);
}


// EXPORT
// =============================================================================

export default {
  // combined
  getFeed: feed.get,
  getFeedV1: feed.getV1,
  setFeed: feed.set,
  setFeedV1: feed.setV1,
  // articles
  getArticles: articles.get,
  getArticlesV1: articlesV1.get,
  setArticles: articles.set,
  setArticlesV1: articlesV1.set,
  removeArticles: articles.remove,
  removeArticlesV1: articlesV1.remove,
  // articles - brief
  getArticlesBrief: articlesBrief.get,
  getArticlesBriefV1: articlesBriefV1.get,
  setArticlesBrief: articlesBrief.set,
  setArticlesBriefV1: articlesBriefV1.set,
  removeArticlesBrief: articlesBrief.remove,
  removeArticlesBriefV1: articlesBriefV1.remove,
  // games
  getGames: games.get,
  setGames: games.set,
  // tweets
  getTweets: tweets.get,
  setTweets: tweets.set,
  // search
  getSearch: search.get,
  getSearchV1: search.getV1,
  setSearch: search.set,
  setSearchV1: search.setV1,
  removeSearch: search.remove,
  removeSearchV1: search.removeV1,
  // clear combined data
  clear,
  clearV1,
};

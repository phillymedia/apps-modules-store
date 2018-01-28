// DEPENDENCIES
// =============================================================================
// THIRD-PARTY LIBRARIES  -------------------------------
import { parallel } from "async";
import feed from "./feed";
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
  // combined feed, games, tweets
  parallel([
    feed.removeV1,
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
  // combined feed, games, tweets
  parallel([
    feed.remove,
    games.remove,
    tweets.remove,
  ], callback);
}


// EXPORT
// =============================================================================

export default {
  getFeed: feed.get,
  getFeedV1: feed.getV1,
  setFeed: feed.set,
  setFeedV1: feed.setV1,
  getGames: games.get,
  setGames: games.set,
  getTweets: tweets.get,
  setTweets: tweets.set,
  getSearch: search.get,
  getSearchV1: search.getV1,
  setSearch: search.set,
  setSearchV1: search.setV1,
  removeSearch: search.remove,
  removeSearchV1: search.removeV1,
  clear,
  clearV1,
};

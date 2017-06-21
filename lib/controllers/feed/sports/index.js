// DEPENDENCIES
// =============================================================================
// THIRD-PARTY LIBRARIES  -------------------------------
import { parallel } from "async";
import feed from "./feed";
import games from "./games";
import tweets from "./tweets";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Clear store.
*
* @method clear
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function clear(callback) {
	// combined feed, games, tweets
	parallel([
		next => feed.remove(next),
		next => games.remove(next),
		next => tweets.remove(next),
	], callback);
}


// EXPORT
// =============================================================================

export default {
	getFeed: feed.get,
	setFeed: feed.set,
	getGames: games.get,
	setGames: games.set,
	getTweets: tweets.get,
	setTweets: tweets.set,
	clear,
};

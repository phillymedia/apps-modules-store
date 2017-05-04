/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
const conf = require("../../config");
// main core
const core = require("./core");
// third-party libraries
const { parallel } = require("async");

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug; // eslint-disable-line no-unused-vars
const _store = conf.store.sports;
const _source = _store.source;
const _name = _store.name;
const _typeCombined = _store.type.combined;
const _typeGames = _store.type.games;
const _typeTweets = _store.type.tweets;
const _delayCombined = _store.expiresInMinutes.combined;
const _delayGames = _store.expiresInMinutes.games;
const _delayTweets = _store.expiresInMinutes.tweets;


/*
* PRIVATE PROPERTIES
* var _privateBar;
*/
const _feeds = conf.feeds; // eslint-disable-line no-unused-vars

/*
* PRIVATE METHODS
* function _privateBar(){ var self = this; return this.foo; }
*/

/**
* Remove from store.
*
* @method removeFeed
* @param {function} callback
* @return {Function} core.remove
*/
function removeFeed(callback) {
	const settings = {
		source: _source,
		type: _typeCombined,
		name: _name,
	};
	return core.remove(settings, callback);
}

/**
* Remove from store.
*
* @method removeTweets
* @param {function} callback
* @return {Function} core.remove
*/
function removeTweets(callback) {
	const settings = {
		source: _source,
		type: _typeTweets,
		name: _name,
	};
	return core.remove(settings, callback);
}

/**
* Remove from store.
*
* @method removeGames
* @param {function} callback
* @return {Function} core.remove
*/
function removeGames(callback) {
	const settings = {
		source: _source,
		type: _typeGames,
		name: _name,
	};
	return core.remove(settings, callback);
}


/*
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ var self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
*/

// COMBINED FEED
// =============================================================================
/**
 * Get store.
 *
 * @method getFeed
 * @param {function} callback				The callback function.
 * @return {function}
 */
function getFeed(callback) {
	const settings = {
		source: _source,
		type: _typeCombined,
		name: _name,
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method setFeed
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function}
*/
function setFeed(content, callback) {
	const settings = {
		source: _source,
		type: _typeCombined,
		delay: _delayCombined,
		name: _name,
		content,
	};
	return core.add(settings, callback);
}


// TWEETS
// =============================================================================

/**
* Get store.
*
* @method getTweets
* @param {function} callback
* @return {Function} core._find				The shared getter.
*/
function getTweets(callback) {
	const settings = {
		source: _source,
		type: _typeTweets,
		name: _name,
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method setTweets
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setTweets(content, callback) {
	const settings = {
		source: _source,
		type: _typeTweets,
		delay: _delayTweets,
		name: _name,
		content,
	};
	return core.add(settings, callback);
}


// GAMES
// =============================================================================

/**
* Get store.
*
* @method getGames
* @param {function} callback
* @return {Function} core._find				The shared getter.
*/
function getGames(callback) {
	const settings = {
		source: _source,
		type: _typeGames,
		name: _name,
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method setGames
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setGames(content, callback) {
	const settings = {
		source: _source,
		type: _typeGames,
		delay: _delayGames,
		name: _name,
		content,
	};
	return core.add(settings, callback);
}

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
		next => removeFeed(next),
		next => removeGames(next),
		next => removeTweets(next),
	], callback);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getFeed,
	setFeed,
	getGames,
	setGames,
	getTweets,
	setTweets,
	clear,
};

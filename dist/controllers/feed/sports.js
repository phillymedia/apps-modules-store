"use strict";

/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for sports-feed-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var conf = require("../../config");
// main core
var core = require("./core");
// third-party libraries

var _require = require("async"),
    parallel = _require.parallel;

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------


var _debug = conf.debug; // eslint-disable-line no-unused-vars
var _store = conf.store.sports;
var _source = _store.source;
var _name = _store.name;
var _typeCombined = _store.type.combined;
var _typeGames = _store.type.games;
var _typeTweets = _store.type.tweets;
var _delayCombined = _store.expiresInMinutes.combined;
var _delayGames = _store.expiresInMinutes.games;
var _delayTweets = _store.expiresInMinutes.tweets;

/*
* PRIVATE PROPERTIES
* var _privateBar;
*/
var _feeds = conf.feeds; // eslint-disable-line no-unused-vars

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
	var settings = {
		source: _source,
		type: _typeCombined,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeTweets,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeGames,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeCombined,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeCombined,
		delay: _delayCombined,
		name: _name,
		content: content
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
	var settings = {
		source: _source,
		type: _typeTweets,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeTweets,
		delay: _delayTweets,
		name: _name,
		content: content
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
	var settings = {
		source: _source,
		type: _typeGames,
		name: _name
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
	var settings = {
		source: _source,
		type: _typeGames,
		delay: _delayGames,
		name: _name,
		content: content
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
	parallel([function (next) {
		return removeFeed(next);
	}, function (next) {
		return removeGames(next);
	}, function (next) {
		return removeTweets(next);
	}], callback);
}

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getFeed: getFeed,
	setFeed: setFeed,
	getGames: getGames,
	setGames: setGames,
	getTweets: getTweets,
	setTweets: setTweets,
	clear: clear
};
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

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
var _debug = conf.debug; // eslint-disable-line no-unused-vars
var _source = conf.store.watch.source;
var _type = conf.store.watch.type.articles;
var _delay = conf.store.watch.expiresInMinutes;

/*
* PRIVATE PROPERTIES
* var _privateBar;
*/
var _feeds = conf.feeds; // eslint-disable-line no-unused-vars

/*
* PRIVATE METHODS
* function _privateBar(){ var self = this; return this.foo; }
*/

/*
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ var self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
*/

// ARTICLES - FULL
// =============================================================================
/**
* Get store.
*
* @method getArticlesPhilly
* @param {String} name 						Name of the store.
* @return {Function} core._find				The shared getter.
*/
function getArticlesPhilly(name, callback) {
	var settings = {
		source: _source,
		type: _type,
		name: name
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method setArticlesPhilly
* @param {String} name 						Name of the store.
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setArticlesPhilly(name, content, callback) {
	var settings = {
		source: _source,
		type: _type,
		delay: _delay,
		name: name,
		content: content
	};
	return core.add(settings, callback);
}

/**
* Remove from store.
*
* @method removeArticles
* @param {String} name 						Name of the store.
* @return {Function} core.remove
*/
function removeArticlesPhilly(name, callback) {
	var settings = {
		source: _source,
		type: _type,
		name: name
	};
	return core.remove(settings, callback);
}

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getArticlesPhilly: getArticlesPhilly,
	setArticlesPhilly: setArticlesPhilly,
	removeArticlesPhilly: removeArticlesPhilly
};
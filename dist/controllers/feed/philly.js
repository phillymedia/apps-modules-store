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
var _store = conf.store.main;
var _source = _store.source;
var _type = _store.type.articles;
var _delay = _store.expiresInMinutes;

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
* @method getArticles
* @param {String} name 						Name of the store.
* @return {Function} core._find				The shared getter.
*/
function getArticles(name, callback) {
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
* @method setArticles
* @param {String} name 						Name of the store.
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setArticles(name, content, callback) {
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
function removeArticles(name, callback) {
	var settings = {
		source: _source,
		type: _type,
		name: name
	};
	return core.remove(settings, callback);
}

// ARTICLES - BRIEF
// =============================================================================

/**
* Get store.
*
* @method getArticlesBrief
* @param {String} name 						Name of the store.
* @return {Function} core._find				The shared getter.
*/
function getArticlesBrief(name, callback) {
	var settings = {
		source: _source + "brief",
		type: _type,
		name: name
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method setArticlesBrief
* @param {String} name 						Name of the store.
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setArticlesBrief(name, content, callback) {
	var settings = {
		source: _source + "brief",
		type: _type,
		delay: _delay,
		name: name,
		content: content
	};
	return core.add(settings, callback);
}

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getArticles: getArticles,
	setArticles: setArticles,
	removeArticles: removeArticles,
	getArticlesBrief: getArticlesBrief,
	setArticlesBrief: setArticlesBrief
};
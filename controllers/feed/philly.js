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

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug; // eslint-disable-line no-unused-vars
const _store = conf.store.main;
const _source = _store.source;
const _type = _store.type.articles;
const _delay = _store.expiresInMinutes;


/*
* PRIVATE PROPERTIES
* var _privateBar;
*/
const _feeds = conf.feeds; // eslint-disable-line no-unused-vars

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
	const settings = {
		source: _source,
		type: _type,
		name,
	};
	return core._find(settings, callback);
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
	const settings = {
		source: _source,
		type: _type,
		delay: _delay,
		name,
		content,
	};
	return core._add(settings, callback);
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
	const settings = {
		source: `${_source}brief`,
		type: _type,
		name,
	};
	return core._find(settings, callback);
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
	const settings = {
		source: `${_source}brief`,
		type: _type,
		delay: _delay,
		name,
		content,
	};
	return core._add(settings, callback);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getArticles,
	setArticles,
	getArticlesBrief,
	setArticlesBrief,
};

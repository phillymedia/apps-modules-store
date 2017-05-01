/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for today-feed-related functions.
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
const _source = conf.store.today.source;
const _type = conf.store.today.type.articles;
const _delay = conf.store.today.expiresInMinutes;


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
* @method getArticlesPhilly
* @param {String} name 						Name of the store.
* @return {Function} core._find				The shared getter.
*/
function getArticlesPhilly(name, callback) {
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
* @method setArticlesPhilly
* @param {String} name 						Name of the store.
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setArticlesPhilly(name, content, callback) {
	const settings = {
		source: _source,
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
	getArticlesPhilly,
	setArticlesPhilly,
};

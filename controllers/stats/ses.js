/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for stats-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
const conf = require("../../config");
// main core
const core = require("./core");

// third-party
const async = require("async"); // eslint-disable-line no-unused-vars

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug; // eslint-disable-line no-unused-vars
const _store = conf.store.admin;
const _delay = _store.expiresInMinutes;
// names
const _nameData = "ses_data";
const _nameCount = "ses_count";


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

/**
* Get store.
*
* @method getCount
* @return {Function} core._find				The shared getter.
*/
function getCount(callback) {
	const settings = {
		name: _nameCount,
	};
	return core._find(settings, callback);
}

/**
* Set store.
*
* @method setCount
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setCount(content, callback) {
	const settings = {
		delay: _delay,
		name: _nameCount,
		content,
	};
	return core._add(settings, callback);
}

/**
* Get store.
*
* @method getData
* @return {Function} core._find				The shared getter.
*/
function getData(callback) {
	const settings = {
		name: _nameData,
	};
	return core._find(settings, callback);
}

/**
* Set store.
*
* @method setData
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
function setData(content, callback) {
	const settings = {
		delay: _delay,
		name: _nameData,
		content,
	};
	return core._add(settings, callback);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getCount,
	setCount,
	getData,
	setData,
};

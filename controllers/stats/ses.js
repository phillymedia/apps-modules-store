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
const { parallel } = require("async");


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

/**
 * Remove store.
 *
 * @method removeCount
 * @param {function} callback
 * @return {Function} core.remove				The shared remover.
 */
function removeCount(callback) {
	const settings = {
		name: _nameCount,
	};
	return core.remove(settings, callback);
}

/**
 * Remove store.
 *
 * @method removeData
 * @param {function} callback
 * @return {Function} core.remove				The shared remover.
 */
function removeData(callback) {
	const settings = {
		name: _nameData,
	};
	return core.remove(settings, callback);
}


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
	return core.find(settings, callback);
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
	return core.add(settings, callback);
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
	return core.find(settings, callback);
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
		next => removeCount(next),
		next => removeData(next),
	], callback);
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
	clear,
};

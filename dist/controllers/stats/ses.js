"use strict";

/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for stats-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
var conf = require("../../config");
// main core
var core = require("./core");

// third-party

var _require = require("async"),
    parallel = _require.parallel;

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------


var _debug = conf.debug; // eslint-disable-line no-unused-vars
var _store = conf.store.admin;
var _delay = _store.expiresInMinutes;
// names
var _nameData = "ses_data";
var _nameCount = "ses_count";

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
 * Remove store.
 *
 * @method removeCount
 * @param {function} callback
 * @return {Function} core.remove				The shared remover.
 */
function removeCount(callback) {
	var settings = {
		name: _nameCount
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
	var settings = {
		name: _nameData
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
	var settings = {
		name: _nameCount
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
	var settings = {
		delay: _delay,
		name: _nameCount,
		content: content
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
	var settings = {
		name: _nameData
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
	var settings = {
		delay: _delay,
		name: _nameData,
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
		return removeCount(next);
	}, function (next) {
		return removeData(next);
	}], callback);
}

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	getCount: getCount,
	setCount: setCount,
	getData: getData,
	setData: setData,
	clear: clear
};
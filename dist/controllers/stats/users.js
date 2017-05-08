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

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
var _debug = conf.debug; // eslint-disable-line no-unused-vars
var _store = conf.store.admin;
var _delay = _store.expiresInMinutes;
// names
var _name = "users";

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

/**
* Get store.
*
* @method get
* @return {Function} core.find				The shared getter.
*/
function get(callback) {
	var settings = {
		name: _name
	};
	return core.find(settings, callback);
}

/**
* Set store.
*
* @method set
* @param {Object} content 					Data to store.
* @param {Function} callback				A callback function.
* @return {Function} core.add				The shared setter.
*/
function set(content, callback) {
	var settings = {
		delay: _delay,
		name: _name,
		content: content
	};
	return core.add(settings, callback);
}

/**
* Flush store.
*
* @method clear
* @param {Function} callback				A callback function.
* @return {Function} core.remove			The shared remover.
*/
function clear(callback) {
	var settings = {
		name: _name
	};
	return core.remove(settings, callback);
}

/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	get: get,
	set: set,
	clear: clear
};
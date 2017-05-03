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


// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
const _debug = conf.debug; // eslint-disable-line no-unused-vars
const _store = conf.store.admin;
const _delay = _store.expiresInMinutes;
// names
const _name = "users";


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
* @method get
* @return {Function} core.find				The shared getter.
*/
function get(callback) {
	const settings = {
		name: _name,
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
	const settings = {
		delay: _delay,
		name: _name,
		content,
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
	const settings = {
		name: _name,
	};
	return core.remove(settings, callback);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	get,
	set,
	clear,
};

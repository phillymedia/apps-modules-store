/**
* PHILLY STORE APP
* a feed sub-class
* Contains methods and variables for stats-related functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
// const conf = require("../../config");
// feed sub-modules
const ses = require("./ses");
const subscriptions = require("./subscriptions");
const users = require("./users");
const terms = require("./terms");

// THIRD PARTY LIBRARIES -------------------------------
// asyncronous functionality (async.each, etc) for performance
const async = require("async");

// CONFIG
// =============================================================================
// LOAD CONFIG FILE  -------------------------------
// const _debug = conf.debug;


/*
* PRIVATE PROPERTIES
* const _privateBar;
*/

/*
* PRIVATE METHODS
* function _privateBar(){ const self = this; return this.foo; }
*/

/*
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
*/

/**
 * Flush stats.
 *
 * @method clearStats
 * @param {object} content					The content, not used on this route.
 * @param {Function} callback				A callback function.
 * @return {Function}
**/
function clearStats(content, callback) {
	// run parallel
	async.parallel([
	// individual calls
		users.clear,
		subscriptions.clear,
		terms.clear,
	],
	// ready to re-create the caches
	callback);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	// ses
	getSesCount: ses.getCount,
	setSesCount: ses.setCount,
	getSesData: ses.getData,
	setSesData: ses.setData,
	// terms
	getTerms: terms.get,
	setTerms: terms.set,
	clearTerms: terms.clear,
	// subscriptions
	getSubscriptions: subscriptions.get,
	setSubscriptions: subscriptions.get,
	clearSubscriptions: subscriptions.get,
	// users
	getUsers: users.get,
	setUsers: users.set,
	clearUsers: users.clear,
	// misc
	clearStats,
};

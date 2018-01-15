"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _async = require("async");

var _ses = require("./ses");

var _ses2 = _interopRequireDefault(_ses);

var _subscriptions = require("./subscriptions");

var _subscriptions2 = _interopRequireDefault(_subscriptions);

var _terms = require("./terms");

var _terms2 = _interopRequireDefault(_terms);

var _users = require("./users");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Flush stats
 *
 * @param {object} content - The content, not used on this route.
 * @param {function} callback - Callback.
 */


// APP -------------------------------
// siblings
function clearStats(content, callback) {
	// run parallel
	(0, _async.parallel)(
	// individual calls
	[_users2.default.clear, _subscriptions2.default.clear, _terms2.default.clear],
	// ready to re-create the caches
	callback);
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// asyncronous functionality (async.each, etc) for performance
exports.default = {
	// ses
	getSesCount: _ses2.default.getCount,
	setSesCount: _ses2.default.setCount,
	getSesData: _ses2.default.getData,
	setSesData: _ses2.default.setData,
	clearSes: _ses2.default.clear,
	// terms
	getTerms: _terms2.default.get,
	setTerms: _terms2.default.set,
	clearTerms: _terms2.default.clear,
	// subscriptions
	getSubscriptions: _subscriptions2.default.get,
	setSubscriptions: _subscriptions2.default.set,
	clearSubscriptions: _subscriptions2.default.clear,
	// users
	getUsers: _users2.default.get,
	setUsers: _users2.default.set,
	clearUsers: _users2.default.clear,
	// misc
	clearStats: clearStats
};
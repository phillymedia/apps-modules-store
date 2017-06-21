"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _async = require("async");

var _feed = require("./feed");

var _feed2 = _interopRequireDefault(_feed);

var _games = require("./games");

var _games2 = _interopRequireDefault(_games);

var _tweets = require("./tweets");

var _tweets2 = _interopRequireDefault(_tweets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
* Clear store.
*
* @method clear
* @param {Function} callback				A callback function.
* @return {Function} core._add				The shared setter.
*/
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY LIBRARIES  -------------------------------
function clear(callback) {
	// combined feed, games, tweets
	(0, _async.parallel)([function (next) {
		return _feed2.default.remove(next);
	}, function (next) {
		return _games2.default.remove(next);
	}, function (next) {
		return _tweets2.default.remove(next);
	}], callback);
}

// EXPORT
// =============================================================================

exports.default = {
	getFeed: _feed2.default.get,
	setFeed: _feed2.default.set,
	getGames: _games2.default.get,
	setGames: _games2.default.set,
	getTweets: _tweets2.default.get,
	setTweets: _tweets2.default.set,
	clear: clear
};
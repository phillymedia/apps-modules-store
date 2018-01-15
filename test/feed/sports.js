/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { feed } from "MAIN";
import { store as _store } from "APP/config";
import log from "COMP/logging";
import _schema from "./schema";


// BEFORE AND AFTER
// =============================================================================

// clean-up
let deleteAfterRun = false;

/**
 * Sports Now before method.
 *
 * @method callBefore
 * @param {function} done
 * @return {function}
 */
function callBefore(done) {
	// test if database is populated
	_schema.count({ source: _store.sports.source })
		.then((count) => {
			if (count === 0) {
			// no content so safe to delete
				deleteAfterRun = true;
			// add test data
			// return fixtures.ensureTestData();
			}
			else {
				log.debug("Test database already exists");
			}
		})
		.then(done);
}

/**
 * Sports Now after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfterSports(done) {
	// delete after run
	if (deleteAfterRun) {
		// delete test content inserted into the databases
		log.debug("Deleting test sports now content...");
		// clear sports feed
		return feed.clearSports((err) => {
			// handle errors
			if (err) {
				log.error(err);
			}
			// otherwise...
			log.debug("Successfully deleted.");
			// callback
			return done();
		});
	}
	// otherwise...
	return done();
}


// MAIN METHODS
// =============================================================================

/**
 * Test the getSportsFeed method.
 *
 * @method getFeed
 * @param {function} done
 * @return {function}
 */
function getFeed(done) {
	feed.getSportsFeed((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSportsFeed method.
 *
 * @method setFeed
 * @param {function} done
 * @return {function}
 */
function setFeed(done) {
	// get sports feed
	feed.getSportsFeed((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			return feed.setSportsFeed(data, (newErr, newData) => {
				expect(newErr).to.be.null;
				expect(newData).to.be.an("array");
				return done();
			});
		}
		log.error("Data didn't get set!");
		return done();
	});
}

/**
 * Test the getSportsGames method.
 *
 * @method getGames
 * @param {function} done
 * @return {function}
 */
function getGames(done) {
	feed.getSportsGames((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSportsGames method.
 *
 * @method setGames
 * @param {function} done
 * @return {function}
 */
function setGames(done) {
	feed.getSportsGames((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			return feed.setSportsGames(data, (newErr, newData) => {
				expect(newErr).to.be.null;
				expect(newData).to.be.an("array");
				return done();
			});
		}
		// no value? problem!
		log.error("Data didn't get set!");
		return done();
	});
}

/**
 * Test the getSportsTweets method.
 *
 * @method getTweets
 * @param {function} done
 * @return {function}
 */
function getTweets(done) {
	feed.getSportsTweets((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSportsTweets method.
 *
 * @method setTweets
 * @param {function} done
 * @return {function}
 */
function setTweets(done) {
	feed.getSportsTweets((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			return feed.setSportsTweets(data, (newErr, newData) => {
				expect(newErr).to.be.null;
				expect(newData).to.be.an("array");
				return done();
			});
		}
		log.error("Data didn't get set!");
		return done();
	});
}


// TESTS
// =============================================================================

// describe the feed store
describe("Sports Now Feed Store", function () {
	// getter - main feed
	describe("Get Sports Feed", () => {
		it("gets the current combined feed", getFeed);
	});
	// setter - main feed
	describe("Set Sports Feed", () => {
		it("gets the current combined feed and immediately sets it", setFeed);
	});
	// getter - games
	describe("Get Sports Games", () => {
		it("gets the current games", getGames);
	});
	// setter - games
	describe("Set Sports Games", () => {
		it("gets the current games and immediately sets them", setGames);
	});

	// getter - tweets
	describe("Get Sports Tweets", () => {
		it("gets the current tweets", getTweets);
	});

	// setter - tweets
	describe("Set Sports Tweets", () => {
		it("gets the current tweets and immediately sets them", setTweets);
	});
	// run once after all tests
	before(callBefore);
	// run once after all tests
	after(callAfterSports);
});

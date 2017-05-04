/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("../index");
const conf = require("../src/config");
const feed = app.feed;
const db = require("../src/controllers/core").db;

// clean-up
let deleteAfterRun = false;

// run once before all tests
before((done) => {
	// test if database is populated
	const Feed = db.model("Feed");
	Feed.count({ source: conf.store.sports.source })
	.then((count) => {
		if (count === 0) {
			// no content so safe to delete
			deleteAfterRun = true;
			// add test data
			// return fixtures.ensureTestData();
			console.log("Delete after run", deleteAfterRun);
		}
		else {
			console.log("Test database already exists");
		}
	})
	.then(done);
});

/**
 * Test feed store.
 */
describe("Sports Now Feed Store", () => {
	// getter - main feed
	describe("Get Sports Feed", () => {
		it("gets the current combined feed", (done) => {
			feed.getSportsFeed((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter - main feed
	describe("Set Sports Feed", () => {
		it("gets the current combined feed and immediately sets it", (done) => {
			// get sports feed
			feed.getSportsFeed((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				// data has value (expected)
				if (data) {
					// set with returned data
					feed.setSportsFeed(data, (err, newData) => {
						expect(err).to.be.null;
						expect(newData).to.be.an("array");
						return done();
					});
				}
				// no value? problem!
				else {
					console.error("Data didn't get set!");
					return done();
				}
			});
		});
	});

	// getter - games
	describe("Get Sports Games", () => {
		it("gets the current games", (done) => {
			feed.getSportsGames((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter - games
	describe("Set Sports Games", () => {
		it("gets the current games and immediately sets them", (done) => {
			feed.getSportsGames((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				// data has value (expected)
				if (data) {
					// set with returned data
					feed.setSportsGames(data, (err, newData) => {
						expect(err).to.be.null;
						expect(newData).to.be.an("array");
						return done();
					});
				}
				// no value? problem!
				else {
					console.error("Data didn't get set!");
					return done();
				}
			});
		});
	});

	// getter - tweets
	describe("Get Sports Tweets", () => {
		it("gets the current tweets", (done) => {
			feed.getSportsTweets((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter - tweets
	describe("Set Sports Tweets", () => {
		it("gets the current tweets and immediately sets them", (done) => {
			feed.getSportsTweets((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				// data has value (expected)
				if (data) {
					// set with returned data
					feed.setSportsTweets(data, (err, newData) => {
						expect(err).to.be.null;
						expect(newData).to.be.an("array");
						return done();
					});
				}
				// no value? problem!
				else {
					console.error("Data didn't get set!");
					return done();
				}
			});
		});
	});
});


// run once after all tests
after((done) => {
	// delete after run
	if (deleteAfterRun) {
		// delete test content inserted into the databases
		console.log("Deleting test sports now content...");
		// clear sports feed
		feed.clearSports((err) => {
			// handle errors
			if (err) {
				console.error(err);
			}
			// otherwise...
			console.log("Successfully deleted.");
			// callback
			return done();
		});
	}
	// otherwise...
	return done;
});

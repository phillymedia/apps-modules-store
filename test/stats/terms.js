/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("app");
const conf = require("config");
const stats = app.stats;
const db = app.db;

// BEFORE AND AFTER
// =============================================================================

// clean-up
let deleteAfterRun = false;

/**
 * SES before method.
 *
 * @method callBefore
 * @param {function} done
 * @return {function}
 */
function callBefore(done) {
	// test if database is populated
	const Stat = db.model("Stat");
	Stat.count({ source: conf.store.admin })
	.then((count) => {
		if (count === 0) {
			// no content so safe to delete
			deleteAfterRun = true;
			// add test data
			// return fixtures.ensureTestData();
		}
		else {
			console.log("Test database already exists");
		}
	})
	.then(done);
}

/**
 * Terms after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// delete after run
	if (deleteAfterRun) {
		// delete test content inserted into the databases
		console.log("Deleting test Terms content...");
		// clear terms
		stats.clearTerms((err) => {
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
	return done();
}


// MAIN METHODS
// =============================================================================

/**
 * Test the getSubscriptions method.
 *
 * @method get
 * @param {function} done
 * @return {function}
 */
function get(done) {
	stats.getSubscriptions((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSubscriptions method.
 *
 * @method set
 * @param {function} done
 * @return {function}
 */
function set(done) {
	stats.getSubscriptions((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			return stats.setSubscriptions(data, (newErr, newData) => {
				expect(newErr).to.be.null;
				expect(newData).to.be.an("array");
				return done();
			});
		}
		// no value? problem!
		console.error("Data didn't get set!");
		return done();
	});
}


// TESTS
// =============================================================================

/**
 * Terms test methods.
 *
 * @method tests
 */
function tests() {
	// getter - data
	describe("Get Terms", () => {
		it("gets the current data", get);
	});

	// setter - data
	describe("Set Terms", () => {
		it("gets the current data and immediately sets it", set);
	});
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	callBefore,
	tests,
	callAfter,
};

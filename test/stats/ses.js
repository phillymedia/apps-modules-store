/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("../../src");
const conf = require("../../src/config");
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
 * SES after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// delete after run
	if (deleteAfterRun) {
		// delete test content inserted into the databases
		console.log("Deleting test SES content...");
		// clear ses
		stats.clearSes((err) => {
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
 * Test the getSesCount method.
 *
 * @method getCount
 * @param {function} done
 * @return {function}
 */
function getCount(done) {
	stats.getSesCount((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSesCount method.
 *
 * @method setCount
 * @param {function} done
 * @return {function}
 */
function setCount(done) {
	// get sports feed
	stats.getSesCount((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			stats.setSesCount(data, (err, newData) => {
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
}

/**
 * Test the getSesData method.
 *
 * @method getData
 * @param {function} done
 * @return {function}
 */
function getData(done) {
	stats.getSesData((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setSesData method.
 *
 * @method setData
 * @param {function} done
 * @return {function}
 */
function setData(done) {
	stats.getSesData((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			stats.setSesData(data, (err, newData) => {
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
}


// TESTS
// =============================================================================

/**
 * SES test methods.
 *
 * @method tests
 */
function tests() {
	// getter - count
	describe("Get SES Count", () => {
		it("gets the SES count", getCount);
	});

	// setter - count
	describe("Set SES Count", () => {
		it("gets the SES count and immediately sets it", setCount);
	});

	// getter - data
	describe("Get SES Data", () => {
		it("gets the current data", getData);
	});

	// setter - data
	describe("Set SES Data", () => {
		it("gets the current data and immediately sets it", setData);
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

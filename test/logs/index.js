/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
const { expect } = require("chai");
const app = require("MAIN");
const conf = require("APP/config");
const logs = app.logs;

// PRIVATE VARIABLES
// =============================================================================
// make sure the log is at the end of our logs
const logDate = new Date();
logDate.setYear(logDate.getFullYear() - 1);
// expected log
const expectedLog = {
	target: "phillycom",
	message: "This is a test.",
};
// test log to insert
const testLog = {
	date: logDate,
	target: "phillycom",
	message: "This is a test.",
};

// BEFORE AND AFTER
// =============================================================================

/**
 * Logs after method.
 *
 * @method after
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// announce clean-up job
	console.log("Deleting test logs content...");
	// clear sports log
	logs.remove(expectedLog, (err) => {
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


// MAIN METHODS
// =============================================================================

/**
 * Test the get method.
 *
 * @method get
 * @param {function} done
 * @return {function}
 */
function get(done) {
	logs.get({ limit: conf.database.logs.view }, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the add method.
 *
 * @method add
 * @param {function} done
 * @return {function}
 */
function add(done) {
	// add a log
	logs.add(testLog, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("object");
		return done();
	}, true);
}

/**
 * Test the exists method.
 *
 * @method exists
 * @param {function} done
 * @return {function}
 */
function exists(done) {
	// add a log
	logs.exists(expectedLog, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.a("boolean");
		return done();
	});
}


// TESTS
// =============================================================================

/**
 * Logs test methods.
 *
 * @method tests
 */
function tests() {
	// getter - data
	describe("Get", () => {
		it("gets the most recent logs", get);
	});
	// setter - data
	describe("Adds", () => {
		it("adds a log", add);
	});
	// setter
	describe("Exists", () => {
		it("checks to see if a message has already been sent", exists);
	});
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	tests,
	callAfter,
};

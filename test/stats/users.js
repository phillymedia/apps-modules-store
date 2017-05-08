/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
import { expect } from "chai";
const app = require("MAIN");
const conf = require("APP/config");
const stats = app.stats;
const db = app.db;

// BEFORE AND AFTER
// =============================================================================

// clean-up
let deleteAfterRun = false;

/**
 * Users before method.
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
		console.log("Deleting test users content...");
		// clear ses
		stats.clearUsers((err) => {
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
 * Test the getUsers method.
 *
 * @method get
 * @param {function} done
 * @return {function}
 */
function get(done) {
	stats.getUsers((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setUsers method.
 *
 * @method set
 * @param {function} done
 * @return {function}
 */
function set(done) {
	stats.getUsers((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		// data has value (expected)
		if (data) {
			// set with returned data
			return stats.setUsers(data, (newErr, newData) => {
				expect(newErr).to.be.null;
				expect(newData).to.be.an("array");
				return done();
			});
		}
		console.error("Data didn't get set!");
		return done();
	});
}


// TESTS
// =============================================================================

/**
 * Users test methods.
 *
 * @method tests
 */
function tests() {
	// getter - data
	describe("Get Users", () => {
		it("gets the current data", get);
	});

	// setter - data
	describe("Set Users", () => {
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

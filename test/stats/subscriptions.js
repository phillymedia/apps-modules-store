/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { stats } from "MAIN";
import { store as _store } from "APP/config";
import log from "COMP/logging";
import _schema from "./schema";

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
	_schema.count({ source: _store.admin })
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
		log.debug("Deleting test subscriptions content...");
		// clear ses
		stats.clearSubscriptions((err) => {
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
		log.error("Data didn't get set!");
		return done();
	});
}


// TESTS
// =============================================================================

// run once before all tests
before(callBefore);
// describe the stats store
describe("Subscriptions Stats Store", () => {
	// getter - data
	describe("Get Subscriptions", () => {
		it("gets the current data", get);
	});

	// setter - data
	describe("Set Subscriptions", () => {
		it("gets the current data and immediately sets it", set);
	});
});
// run once after all tests
after(callAfter);

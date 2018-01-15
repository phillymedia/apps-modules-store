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
let deleteAfterRun = false; // eslint-disable-line no-unused-vars

/**
 * Users before method.
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
/*
function callAfterStatsUsers(done) {
	// delete after run
	if (deleteAfterRun) {
		// delete test content inserted into the databases
		log.debug("Deleting test users content...");
		// clear ses
		stats.clearUsers((err) => {
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
*/


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
		// otherwise
		log.error("Data didn't get set!");
		return done();
	});
}


// TESTS
// =============================================================================

// before
before(callBefore);
// describe the stats store
describe("Users Stats Store", () => {
	// getter - data
	describe("Get Users", () => {
		it("gets the current data", get);
	});

	// setter - data
	describe("Set Users", () => {
		it("gets the current data and immediately sets it", set);
	});
});
// after
// after(callAfterStatsUsers);

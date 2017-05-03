/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("../index");
const conf = require("../config");
const stats = app.stats;
const db = require("../controllers/core").db;

// clean-up
let deleteAfterRun = false;

// run once before all tests
before((done) => {
	// test if database is populated
	const Stat = db.model("Stat");
	Stat.count({ source: conf.store.admin })
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
 * Test stats store.
 */
describe("Terms Stats Store", () => {
	// getter - data
	describe("Get Terms", () => {
		it("gets the current data", (done) => {
			stats.getTerms((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter - data
	describe("Set Terms", () => {
		it("gets the current data and immediately sets it", (done) => {
			stats.getTerms((err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				// data has value (expected)
				if (data) {
					// set with returned data
					stats.setTerms(data, (err, newData) => {
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
		console.log("Deleting test terms content...");
		// clear ses
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
	return done;
});

/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
import { whilst } from "async";
import { expect } from "chai";
import app from "MAIN";
import log from "COMP/logging";
const detail = app.detail;

// test category
const testId = "00000006";
const expectedContent = {
	article: {
		item_id: testId,
		testValue: "Working",
	},
};


// BEFORE AND AFTER
// =============================================================================

/**
 * Before method.
 *
 * @method callBefore
 * @param {function} done
 * @return {function}
 */
function callBefore(done) {
	// delete test content inserted into the databases
	log.info("Adding test detail content...");
	// fake articles
	let count = 0;
	whilst(
		// test
		() => (count < 5),
		// iteration
		(next) => {
			// increment count
			++count;
			// set item_id
			expectedContent.article.item_id = `0000000${count}`;
			// add detail
			detail.addDetail(expectedContent, (err, data) => {
				// handle error
				if (err) {
					return next(err);
				}
				// otherwise
				expect(err).to.not.exist;
				expect(data).to.be.an("object")
				.which.has.property("article")
				.which.has.property("item_id")
				.which.equals(`0000000${count}`)
				;
				return next();
			});
		},
		// all iterations complete
		done,
	);
}

/**
 * After method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// delete test content inserted into the databases
	log.debug("Deleting test detail content...");
	// fake philly articles
	detail.recreateCollectionDetail((err) => {
		// handle errors
		if (err) {
			return done(err);
		}
		// otherwise...
		log.debug("Successfully deleted.");
		// callback
		return done();
	});
}


// MAIN METHODS
// =============================================================================

/**
 * Test the getDetail method.
 *
 * @method getDetail
 * @param {function} done
 * @return {function}
 */
function getDetail(done) {
	detail.getDetail(testId, (err, data) => {
		// handle errors
		if (err) {
			return done(err);
		}
		// otherwise...
		expect(err).to.not.exist;
		expect(data).to.be.an("object")
		.which.has.property("article")
		.which.has.property("item_id")
		.which.equals(testId)
		;
		return done();
	});
}

/**
 * Test the addDetail method.
 *
 * @method addDetail
 * @param {function} done
 * @return {function}
 */
function addDetail(done) {
	// update item_id
	expectedContent.article.item_id = testId;
	// add detail
	detail.addDetail(expectedContent, (err, data) => {
		// handle errors
		if (err) {
			return done(err);
		}
		// otherwise...
		expect(err).to.not.exist;
		expect(data).to.be.an("object")
		.which.has.property("article")
		.which.has.property("item_id")
		.which.equals(testId)
		;
		return done();
	});
}


// TESTS
// =============================================================================

// run once before the tests
before(callBefore);
// describe the store
describe("Philly.com Detail Store", function () {
	// main app
	// setter
	describe("Add Detail", () => {
		it("adds a detail, pushing out the oldest item", addDetail);
	});
	// getter
	describe("Get Detail", () => {
		it("gets by ID", getDetail);
	});
});
// run once after all tests
after(callAfter);

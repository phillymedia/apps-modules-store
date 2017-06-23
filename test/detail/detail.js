/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
import { map, some } from "lodash";
import { expect } from "chai";
import { detail } from "MAIN";
import log from "COMP/logging";

// test category
const testId = 10000006;
const insertedId = 10000005;
const testIds = [
	insertedId,
	testId,
];
const badId = 11000006;
const expectedContent = {
	article: {
		item_id: testId,
		testValue: "Working",
	},
};
const insertedContents = map([0, 1, 2, 3, 4, 5], num => ({
	article: {
		item_id: 10000000 + num,
		testValue: "Working",
	},
}));


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
	log.debug("Adding test detail content...");
	// fake articles
	// add detail
	detail.addDetails(insertedContents, (err, data) => {
		// handle error
		if (err) {
			return done(err);
		}
		// otherwise
		expect(err).to.not.exist;
		// data is an array
		expect(data).to.be.an("array");
		// one of the documents has the insertedId
		expect(some(data, {
			article: {
				item_id: insertedId,
			},
		})).to.be.true;
		// done
		return done();
	});
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
 * Test the getDetail method.
 *
 * @method getDetails
 * @param {function} done
 * @return {function}
 */
function getDetails(done) {
	detail.getDetails(testIds, (err, data) => {
		// handle errors
		if (err) {
			return done(err);
		}
		// otherwise...
		expect(err).to.not.exist;
		expect(data).to.be.an("array");
		expect(some(data, {
			article: {
				item_id: testId,
			},
		})).to.be.true;
		return done();
	});
}

/**
 * Test the getDetail method.
 *
 * @method getBadDetail
 * @param {function} done
 * @return {function}
 */
function getBadDetail(done) {
	detail.getDetail(badId, (err, data) => {
		// handle errors
		if (err) {
			return done(err);
		}
		// otherwise...
		expect(err).to.not.exist;
		expect(data).to.be.false
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
	// getters
	context("when searching for an article that exists", function () {
		// singular
		describe("Get Detail", () => {
			it("gets by ID", getDetail);
		});
		// array
		describe("Get Details", () => {
			it("gets by ID array", getDetails);
		});
	});
	// getters - failure
	context("when searching for an article that doesn't exist", function () {
		// getter
		describe("Get Detail", () => {
			it("returns false", getBadDetail);
		});
	});
});
// run once after all tests
after(callAfter);

/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import log from "COMP/logging";
import { feed } from "MAIN";

// test category
const expectedContent = {
	mostsearchedterms: [
		"test content",
	],
	searchterms: [
		"another test",
	],
};


// BEFORE AND AFTER
// =============================================================================

/**
 * Philly.com after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// delete test content inserted into the databases
	log.debug("Deleting test sports now content...");
	// fake philly articles
	feed.clearSearchSports((err) => {
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


// MAIN METHODS
// =============================================================================

/**
 * Test the getSearchSports method.
 *
 * @method getSearch
 * @param {function} done
 * @return {function}
 */
function getSearch(done) {
	feed.getSearchSports((err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("object");
		return done();
	});
}

/**
 * Test the setSearchSports method.
 *
 * @method setSearch
 * @param {function} done
 * @return {function}
 */
function setSearch(done) {
	feed.setSearchSports(expectedContent, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("object");
		expect(data).to.deep.equal(expectedContent);
		return done();
	});
}


// TESTS
// =============================================================================

// describe the feed store
describe("Sports Now Feed Search Store", function () {
	// main app
	// setter
	describe("Set Search Sports", () => {
		it("sets the current search terms", setSearch);
	});
	// getter
	describe("Get Search Sports", () => {
		it("gets the current search terms", getSearch);
	});
});
// run once after all tests
after(callAfter);

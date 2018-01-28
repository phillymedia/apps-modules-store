/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { log } from "philly-helpers";
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
function callAfterSearchPhilly(done) {
  // delete test content inserted into the databases
  log.debug("Deleting test philly.com content...");
  // fake philly articles
  feed.clearSearchPhilly((err) => {
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
 * Test the getSearchPhilly method.
 *
 * @method getSearch
 * @param {function} done
 * @return {function}
 */
function getSearch(done) {
  feed.getSearchPhilly((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("object");
    return done();
  });
}

/**
 * Test the setSearchPhilly method.
 *
 * @method setSearch
 * @param {function} done
 * @return {function}
 */
function setSearch(done) {
  feed.setSearchPhilly(expectedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("object");
    expect(data).to.deep.equal(expectedContent);
    return done();
  });
}


// TESTS
// =============================================================================

// describe the feed store
describe("Philly.com Feed Search Store", function () {
  // main app
  // setter
  describe("Set Search Philly", () => {
    it("sets the current search terms", setSearch);
  });
  // getter
  describe("Get Search Philly", () => {
    it("gets the current search terms", getSearch);
  });
  // run once after all tests
  after(callAfterSearchPhilly);
});

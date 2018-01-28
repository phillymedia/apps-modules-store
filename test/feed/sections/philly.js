/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { log } from "philly-helpers";
import { feed } from "MAIN";

// test category
const expectedContent = [{
  title: "76ers", key: "sixers", url: "http://stage.apsping2.philly.com:7197/v1/api/philly/sixers", highlight: 0, sort: 15, textOnly: "76ers", adunit: "/4495/Apps/App_P_News/App_P_Sports", sportscolor: "0066cb99", template: "76ers", image_url: "http://media.philly.com/images/dixon-95946-f-wp-content-uploads-2017-08-080117_ryan-arcidiacono_1200-1200x800.jpg",
}];


// BEFORE AND AFTER
// =============================================================================

/**
 * Philly.com after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfterSectionsPhilly(done) {
  // delete test content inserted into the databases
  log.debug("Deleting test philly.com content...");
  // fake philly articles
  feed.clearSectionsPhilly((err) => {
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
 * Test the getSectionsPhilly method.
 *
 * @method getSections
 * @param {function} done
 * @return {function}
 */
function getSections(done) {
  feed.getSectionsPhilly((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSectionsPhilly method.
 *
 * @method setSections
 * @param {function} done
 * @return {function}
 */
function setSections(done) {
  feed.setSectionsPhilly(expectedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(data).to.deep.equal(expectedContent);
    return done();
  });
}


// TESTS
// =============================================================================

// describe the feed store
describe("Philly.com Feed Sections Store", function () {
  // main app
  // setter
  describe("Set Sections Philly", () => {
    it("sets the current sections terms", setSections);
  });
  // getter
  describe("Get Sections Philly", () => {
    it("gets the current sections terms", getSections);
  });
  // run once after all tests
  after(callAfterSectionsPhilly);
});

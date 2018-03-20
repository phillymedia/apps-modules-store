/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { log } from "philly-helpers";
import { feed } from "MAIN";
import {default as FeedSchema} from "APP/models/Feed";

// test category
const expectedContent = [{
  title: "76ers",
  key: "sixers",
  url: "http://stage.apsping2.philly.com:7197/v1/api/philly/sixers",
  highlight: 0,
  sort: 15,
  textOnly: "76ers",
  adunit: "/4495/Apps/App_P_News/App_P_Sports",
  sportscolor: "0066cb99",
  template: "76ers",
  image_url: "http://media.philly.com/images/dixon-95946-f-wp-content-uploads-2017-08-080117_ryan-arcidiacono_1200-1200x800.jpg",
}];


// BEFORE AND AFTER
// =============================================================================

/**
 * Philly.com after method
 *
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
 * Test the getSectionsPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function getSections(done) {
  feed.getSectionsPhilly((err, data) => {
    // handle errors
    if (err) {
      return done(err);
    }
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSectionsPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function setSections(done) {
  feed.setSectionsPhilly(expectedContent, (err, data) => {
    // handle errors
    if (err) {
      return done(err);
    }
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(data).to.deep.equal(expectedContent);

    // Pull in the feeds schema, and manually check for version data.
    return done();
  });
}

const setSectionsWithVersion = (done) => {
  const message = "Hello, this is some versioned data.";
  const version = 'v1';

  const additional_data = {version};
  const store_data = {message};

  feed.setSectionsPhilly(store_data, (err, data) => {
    if (err) {
      return done(err);
    }

    // Check the mongodb instance for our versioned data.
    return FeedSchema.findOne(additional_data, function(err, data) {
      expect(err).to.be.null;

      expect(data).to.not.be.null;

      // Look for our beloved version property.
      expect(data).to.have.property("version");
      expect(data.version).to.equal(version);

      // Ensure that we've actually retrieved the proper versioned data.
      expect(data).to.have.property("content");
      expect(data.content).to.have.property("message");
      expect(data.content.message).to.equal(message);

      return done();
    });
  }, additional_data);
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

  // We need to make sure the versions are being honored. If we include a version in the
  // additinal data property, we should see it in the dashboard.

  // run once after all tests
  after(callAfterSectionsPhilly);
});

// Tests that ensure that the store can differentiate between data versions.
describe("Philly.com Feeds Sections Store - Versions", () => {
  it("can set the data version via additional data properties", setSectionsWithVersion);

  after(callAfterSectionsPhilly);
});

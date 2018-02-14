/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { feed } from "MAIN";

// test category
const testCat = "test_category";
const expectedContent = [];
expectedContent.push({
  testValue: "Working.",
});


// MAIN METHODS
// =============================================================================

/**
 * Test the getArticlesPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function getArticles(done) {
  feed.getArticlesPhilly(testCat, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setArticlesPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function setArticles(done) {
  feed.setArticlesPhilly(testCat, expectedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(data).to.deep.equal(expectedContent);
    return done();
  });
}

/**
 * Test the getArticlesTodayPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function getArticlesToday(done) {
  feed.getArticlesTodayPhilly(testCat, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setArticlesTodayPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function setArticlesToday(done) {
  feed.setArticlesTodayPhilly(testCat, expectedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(data).to.deep.equal(expectedContent);
    return done();
  });
}

/**
 * Test the getArticlesTodayPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function getArticlesWatch(done) {
  feed.getArticlesWatchPhilly(testCat, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setArticlesTodayPhilly method.
 *
 * @param {function} done
 * @return {function}
 */
function setArticlesWatch(done) {
  feed.setArticlesWatchPhilly(testCat, expectedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(data).to.deep.equal(expectedContent);
    return done();
  });
}


// TESTS
// =============================================================================

// describe the feed store
describe("Philly.com Feed Store", function () {
  // main app
  // getter
  describe("Get Articles Philly", () => {
    it("gets the current articles", getArticles);
  });
  // setter
  describe("Set Articles Philly", () => {
    it("sets the current articles", setArticles);
  });
  // today extension
  // getter
  describe("Get Articles Today Philly", () => {
    it("gets the current today ext articles", getArticlesToday);
  });
  // setter
  describe("Set Articles Today Philly", () => {
    it("sets the current today ext articles", setArticlesToday);
  });
  // watch extension
  // getter
  describe("Get Articles Watch Philly", () => {
    it("gets the current watch articles", getArticlesWatch);
  });
  // setter
  describe("Get Articles Watch Philly", () => {
    it("sets the current watch articles", setArticlesWatch);
  });
  // run once after all tests
  // after(callAfterPhilly);
});

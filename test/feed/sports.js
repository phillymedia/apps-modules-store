/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { feed } from "MAIN";
import { log } from "philly-helpers";


// MAIN METHODS
// =============================================================================

/**
 * Test the getArticlesSports method.
 *
 * @param {function} done
 * @return {function}
 */
function getArticles(done) {
  feed.getArticlesSports((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setArticlesSports method.
 *
 * @param {function} done
 * @return {function}
 */
function setArticles(done) {
  // get sports feed
  feed.getArticlesSports((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return feed.setArticlesSports(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    log.error("Data didn't get set!");
    return done();
  });
}

/**
 * Test the getSportsGames method.
 *
 * @param {function} done
 * @return {function}
 */
function getGames(done) {
  feed.getSportsGames((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSportsGames method.
 *
 * @param {function} done
 * @return {function}
 */
function setGames(done) {
  feed.getSportsGames((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return feed.setSportsGames(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    // no value? problem!
    log.error("Data didn't get set!");
    return done();
  });
}

/**
 * Test the getSportsTweets method.
 *
 * @param {function} done
 * @return {function}
 */
function getTweets(done) {
  feed.getSportsTweets((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSportsTweets method.
 *
 * @param {function} done
 * @return {function}
 */
function setTweets(done) {
  feed.getSportsTweets((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return feed.setSportsTweets(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    log.error("Data didn't get set!");
    return done();
  });
}


/**
 * Test the getSportsFeed method.
 *
 * @param {function} done
 * @return {function}
 */
function getFeed(done) {
  feed.getSportsFeed((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSportsFeed method.
 *
 * @param {function} done
 * @return {function}
 */
function setFeed(done) {
  // get sports feed
  feed.getSportsFeed((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return feed.setSportsFeed(data, (newErr, newData) => {
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

// describe the feed store
describe("Sports Now Feed Store", function () {
  // getter - articles
  describe("Get Sports Articles", () => {
    it("gets the current combined feed", getArticles);
  });
  // setter - articles
  describe("Set Sports Articles", () => {
    it("gets the current combined feed and immediately sets it", setArticles);
  });
  // getter - games
  describe("Get Sports Games", () => {
    it("gets the current games", getGames);
  });
  // setter - games
  describe("Set Sports Games", () => {
    it("gets the current games and immediately sets them", setGames);
  });
  // getter - tweets
  describe("Get Sports Tweets", () => {
    it("gets the current tweets", getTweets);
  });
  // setter - tweets
  describe("Set Sports Tweets", () => {
    it("gets the current tweets and immediately sets them", setTweets);
  });
  // getter - main feed
  describe("Get Sports Feed", () => {
    it("gets the current combined feed", getFeed);
  });
  // setter - main feed
  describe("Set Sports Feed", () => {
    it("gets the current combined feed and immediately sets it", setFeed);
  });
});

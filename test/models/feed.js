/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");

// PRIVATE VARIABLES
// =============================================================================
// model
const Feed = require("APP/models/Feed");
// reusable variables for testing.
const testFeed = {
  source: "philly_app",
  name: "entertainment",
};
const feedParams = { source: "philly_app", name: "entertainment" };
const feedParamsTest = "philly_app";
const expectedFeed = {
  _id: "5700a128bd97c1341d8fb365",
  source: "philly_app",
  name: "entertainment",
};


// MAIN METHODS
// =============================================================================

/**
 * Test the add method.
 *
 * @param {function} done
 * @return {function}
 */
function add(done) {
  const FeedMock = sinon.mock(new Feed(testFeed));
  const feed = FeedMock.object;

  FeedMock
    .expects("save")
    .yields(null);

  // eslint-disable-next-line no-unused-vars
  feed.save((err, result) => {
    FeedMock.verify();
    FeedMock.restore();
    expect(err).to.be.null;
    done();
  });
}

/**
 * Test the add method.
 *
 * @param {function} done
 * @return {function}
 */
function addError(done) {
  const FeedMock = sinon.mock(new Feed(testFeed));
  const feed = FeedMock.object;
  const expectedError = {
    name: "ValidationError",
  };

  FeedMock
    .expects("save")
    .yields(expectedError);

  feed.save((err, result) => {
    FeedMock.verify();
    FeedMock.restore();
    expect(err.name).to.equal("ValidationError");
    expect(result).to.be.undefined;
    done();
  });
}

/**
 * Test the find method.
 *
 * @param {function} done
 * @return {function}
 */
function findByParams(done) {
  const feedMock = sinon.mock(Feed);

  feedMock
    .expects("find")
    .withArgs(feedParams)
    .yields(null, expectedFeed);

  Feed.find(feedParams, (err, result) => {
    feedMock.verify();
    feedMock.restore();
    expect(result.source).to.equal(feedParamsTest);
    done();
  });
}


// TESTS
// =============================================================================

// model
describe("Feed Model", () => {
  // add
  it("should create a new feed entry", add);
  // error if add fails
  it("should return error if feed is not created", addError);
  // find
  it("should find feed by params", findByParams);
});

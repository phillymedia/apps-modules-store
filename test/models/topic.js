/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.topics.data;

// PRIVATE VARIABLES
// =============================================================================
// model
const Topic = require("APP/models/Topic");
// reusable variables for testing.
const testTopic = mockedData.expectedContent;
const topicParams = {
  arn: mockedData.expectedContent.arn,
};
const topicParamsTest = mockedData.expectedContent.arn;
const expectedTopic = {
  _id: "5700a128bd97c1341d8fb365",
  arn: mockedData.expectedContent.arn,
  attributes: mockedData.expectedContent.attributes,
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
  const TopicMock = sinon.mock(new Topic(testTopic));
  const topic = TopicMock.object;

  TopicMock
    .expects("save")
    .yields(null);

  // eslint-disable-next-line no-unused-vars
  topic.save((err, result) => {
    TopicMock.verify();
    TopicMock.restore();
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
  const TopicMock = sinon.mock(new Topic(testTopic));
  const topic = TopicMock.object;
  const expectedError = {
    name: "ValidationError",
  };

  TopicMock
    .expects("save")
    .yields(expectedError);

  topic.save((err, result) => {
    TopicMock.verify();
    TopicMock.restore();
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
  const topicMock = sinon.mock(Topic);

  topicMock
    .expects("find")
    .withArgs(topicParams)
    .yields(null, expectedTopic);

  Topic.find(topicParams, (err, result) => {
    topicMock.verify();
    topicMock.restore();
    expect(result.arn).to.equal(topicParamsTest);
    done();
  });
}


// TESTS
// =============================================================================

// model
describe("Topic Model", () => {
  // add
  it("should create a new topic entry", add);
  // error if add fails
  it("should return error if topic is not created", addError);
  // find
  it("should find topic by params", findByParams);
});

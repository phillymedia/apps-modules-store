/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import topics from "COMP/aws/sns/topics";
const get = topics.getByHint;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.topics.data;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Test the get method - no errors.
 *
 * @param {function} done
 * @return {function}
 */
function noErrors(done) {
  get(mockedData.testHint, (err, data) => {
    expect(err).to.not.exist;
    expect(data).to.be.an("object")
      .which.has.property("arn")
      .which.equals(mockedData.expectedContent.arn);
    // done!
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

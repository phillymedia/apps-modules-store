/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { some } from "lodash";
import { expect } from "chai";
import topics from "COMP/aws/sns/topics";
const { addMany: add } = topics;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.topics.data;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Test the add method.
 *
 * @param {function} done
 * @return {function}
 */
function noErrors(done) {
  add(mockedData.insertedContents, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(some(data, {
      arn: mockedData.insertedContents[0].TopicArn,
    })).to.be.true;
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

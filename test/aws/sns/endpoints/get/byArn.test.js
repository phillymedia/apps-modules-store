/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import endpoints from "COMP/aws/sns/endpoints";
const get = endpoints.getByArn;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.endpoints.data;


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
  get(mockedData.testEndpoint.arn, (err, data) => {
    expect(err).to.not.exist;
    expect(data).to.be.an("object")
      .which.has.property("arn")
      .which.equals(mockedData.testEndpoint.arn);
    // done!
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import applications from "COMP/aws/sns/applications";
const { add } = applications;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.applications.data;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Test the add method.
 *
 * @method noErrors
 * @param {function} done
 * @return {function}
 */
function noErrors(done) {
  add(mockedData.insertedContent, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("object").that.has.property("arn").which.equals(mockedData.expectedContent.arn);
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

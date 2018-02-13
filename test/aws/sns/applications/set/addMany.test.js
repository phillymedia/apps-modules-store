/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { some } from "lodash";
import { expect } from "chai";
import applications from "COMP/aws/sns/applications";
const add = applications.addMany;
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
  add(mockedData.insertedContents, (err, data) => {
    if (err) {
      return done(err);
    }
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(some(data, {
      arn: mockedData.insertedContents[0].PlatformApplicationArn,
    })).to.be.true;
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

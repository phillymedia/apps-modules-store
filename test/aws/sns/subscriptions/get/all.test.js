/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { some } from "lodash";
// TESTED METHOD -------------------------------
import { expect } from "chai";
import subscriptions from "COMP/aws/sns/subscriptions";
const { get } = subscriptions;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.subscriptions.data;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Test the get method - no errors.
 *
 * @method noErrors
 * @param {function} done
 * @return {function}
 */
function noErrors(done) {
  get((getErr, data) => {
    expect(getErr).to.not.exist;
    expect(data).to.be.an("array");
    expect(some(data, {
      arn: mockedData.testSubscription.arn,
    })).to.be.true;
    // done!
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

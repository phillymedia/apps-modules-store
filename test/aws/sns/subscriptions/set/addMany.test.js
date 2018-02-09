/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { some } from "lodash";
import { expect } from "chai";
import subscriptions from "COMP/aws/sns/subscriptions";
const add = subscriptions.addMany;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.subscriptions.data;


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
  add(mockedData.insertedSubscriptions, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(some(data, {
      arn: mockedData.insertedSubscriptions[0].SubscriptionArn,
    })).to.be.true;
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

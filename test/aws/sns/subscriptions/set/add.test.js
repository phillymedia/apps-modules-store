/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import subscriptions from "COMP/aws/sns/subscriptions";
const { add } = subscriptions;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.subscriptions.data;


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
  add(mockedData.insertedSubscription, (err, data) => {
    expect(err).to.not.exist;
    expect(data).to.be.an("array");
    expect(data[0]).to.be.an("object")
      .that.has.property("arn")
      .which.equals(mockedData.insertedSubscription.SubscriptionArn);
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

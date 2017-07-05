/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { every } from "lodash";
// TESTED METHOD -------------------------------
import { expect } from "chai";
import subscriptions from "COMP/aws/sns/subscriptions";
const get = subscriptions.getByTopicArn;
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
	get(mockedData.testSubscription.topic, (err, data) => {
		expect(err).to.not.exist;
		expect(data).to.be.an("array");
		expect(every(data, {
			topic: mockedData.testSubscription.topic,
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

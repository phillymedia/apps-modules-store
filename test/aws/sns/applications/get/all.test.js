/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import applications from "COMP/aws/sns/applications";
const get = applications.get;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.applications.data;


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
		expect(data[0]).to.have.property("arn").which.equals(mockedData.expectedContent.arn);
		// done!
		return done();
	});
}


// EXPORTS
// =============================================================================

export default {
	noErrors,
};

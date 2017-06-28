/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { expect } from "chai";
import endpoints from "COMP/aws/sns/endpoints";
const add = endpoints.add;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.endpoints.data;


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
	add(mockedData.endpoint, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("object")
		.that.has.property("arn")
		.which.equals(mockedData.endpoint.EndpointArn);
		return done();
	});
}


// EXPORTS
// =============================================================================

export default {
	noErrors,
};

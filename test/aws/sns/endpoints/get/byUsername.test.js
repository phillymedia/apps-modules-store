/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { every } from "lodash";
// TESTED METHOD -------------------------------
import { expect } from "chai";
import endpoints from "COMP/aws/sns/endpoints";
const get = endpoints.getByUsername;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.endpoints.data;


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
  get(mockedData.testEndpoint.attributes.CustomUserData, (err, data) => {
    expect(err).to.not.exist;
    expect(data).to.be.an("array");
    expect(every(data, {
      attributes: {
        CustomUserData: mockedData.testEndpoint.attributes.CustomUserData,
      },
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

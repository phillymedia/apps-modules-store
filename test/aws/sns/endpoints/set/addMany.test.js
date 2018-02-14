/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// TESTED METHOD -------------------------------
import { some } from "lodash";
import { expect } from "chai";
import endpoints from "COMP/aws/sns/endpoints";
const add = endpoints.addMany;
// MOCKED DATA -------------------------------
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.endpoints.data;


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
  add(mockedData.insertedContents, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    expect(some(data, {
      arn: mockedData.insertedContents[0].EndpointArn,
    })).to.be.true;
    return done();
  });
}


// EXPORTS
// =============================================================================

export default {
  noErrors,
};

/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.applications.data;

// PRIVATE VARIABLES
// =============================================================================
// model
const Application = require("APP/models/Application");
// reusable variables for testing.
const testApplication = mockedData.expectedContent;
const applicationParams = {
	arn: mockedData.expectedContent.arn,
};
const applicationParamsTest = mockedData.expectedContent.arn;
const expectedApplication = {
	_id: "5700a128bd97c1341d8fb365",
	arn: mockedData.expectedContent.arn,
	attributes: mockedData.expectedContent.attributes,
};


// MAIN METHODS
// =============================================================================

/**
 * Test the add method.
 *
 * @method add
 * @param {function} done
 * @return {function}
 */
function add(done) {
	const ApplicationMock = sinon.mock(new Application(testApplication));
	const application = ApplicationMock.object;

	ApplicationMock
		.expects("save")
		.yields(null);

	// eslint-disable-next-line no-unused-vars
	application.save((err, result) => {
		ApplicationMock.verify();
		ApplicationMock.restore();
		expect(err).to.be.null;
		done();
	});
}

/**
 * Test the add method.
 *
 * @method addError
 * @param {function} done
 * @return {function}
 */
function addError(done) {
	const ApplicationMock = sinon.mock(new Application(testApplication));
	const application = ApplicationMock.object;
	const expectedError = {
		name: "ValidationError",
	};

	ApplicationMock
		.expects("save")
		.yields(expectedError);

	application.save((err, result) => {
		ApplicationMock.verify();
		ApplicationMock.restore();
		expect(err.name).to.equal("ValidationError");
		expect(result).to.be.undefined;
		done();
	});
}

/**
 * Test the find method.
 *
 * @method findByParams
 * @param {function} done
 * @return {function}
 */
function findByParams(done) {
	const applicationMock = sinon.mock(Application);

	applicationMock
		.expects("find")
		.withArgs(applicationParams)
		.yields(null, expectedApplication);

	Application.find(applicationParams, (err, result) => {
		applicationMock.verify();
		applicationMock.restore();
		expect(result.arn).to.equal(applicationParamsTest);
		done();
	});
}


// TESTS
// =============================================================================

// model
describe("Application Model", () => {
	// add
	it("should create a new application entry", add);
	// error if add fails
	it("should return error if application is not created", addError);
	// find
	it("should find application by params", findByParams);
});

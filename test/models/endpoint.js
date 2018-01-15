/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.endpoints.data;

// PRIVATE VARIABLES
// =============================================================================
// model
const Endpoint = require("APP/models/Endpoint");
// reusable variables for testing.
const { testEndpoint } = mockedData;
const endpointParams = {
	arn: mockedData.endpoint.EndpointArn,
};
const endpointParamsTest = mockedData.endpoint.EndpointArn;
const expectedEndpoint = {
	_id: "5700a128bd97c1341d8fb365",
	arn: mockedData.endpoint.EndpointArn,
	attributes: mockedData.endpoint.Attributes,
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
	const EndpointMock = sinon.mock(new Endpoint(testEndpoint));
	const endpoint = EndpointMock.object;

	EndpointMock
		.expects("save")
		.yields(null);

	// eslint-disable-next-line no-unused-vars
	endpoint.save((err, result) => {
		EndpointMock.verify();
		EndpointMock.restore();
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
	const EndpointMock = sinon.mock(new Endpoint(testEndpoint));
	const endpoint = EndpointMock.object;
	const expectedError = {
		name: "ValidationError",
	};

	EndpointMock
		.expects("save")
		.yields(expectedError);

	endpoint.save((err, result) => {
		EndpointMock.verify();
		EndpointMock.restore();
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
	const endpointMock = sinon.mock(Endpoint);

	endpointMock
		.expects("find")
		.withArgs(endpointParams)
		.yields(null, expectedEndpoint);

	Endpoint.find(endpointParams, (err, result) => {
		endpointMock.verify();
		endpointMock.restore();
		expect(result.arn).to.equal(endpointParamsTest);
		done();
	});
}


// TESTS
// =============================================================================

// model
describe("Endpoint Model", () => {
	// add
	it("should create a new endpoint entry", add);
	// error if add fails
	it("should return error if endpoint is not created", addError);
	// find
	it("should find endpoint by params", findByParams);
});

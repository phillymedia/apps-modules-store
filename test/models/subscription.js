/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");
import testUtils from "TEST/utils";
const mockedData = testUtils.mocked.aws.sns.subscriptions.data;

// PRIVATE VARIABLES
// =============================================================================
// model
const Subscription = require("APP/models/Subscription");
// reusable variables for testing.
const testSubscription = mockedData.testSubscription;
const subscriptionParams = {
	arn: mockedData.subscription.SubscriptionArn,
};
const subscriptionParamsTest = mockedData.subscription.SubscriptionArn;
const expectedSubscription = {
	_id: "5700a128bd97c1341d8fb365",
	arn: mockedData.subscription.SubscriptionArn,
	attributes: mockedData.subscription.Attributes,
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
	const SubscriptionMock = sinon.mock(new Subscription(testSubscription));
	const subscription = SubscriptionMock.object;

	SubscriptionMock
		.expects("save")
		.yields(null);

	// eslint-disable-next-line no-unused-vars
	subscription.save((err, result) => {
		SubscriptionMock.verify();
		SubscriptionMock.restore();
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
	const SubscriptionMock = sinon.mock(new Subscription(testSubscription));
	const subscription = SubscriptionMock.object;
	const expectedError = {
		name: "ValidationError",
	};

	SubscriptionMock
		.expects("save")
		.yields(expectedError);

	subscription.save((err, result) => {
		SubscriptionMock.verify();
		SubscriptionMock.restore();
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
	const subscriptionMock = sinon.mock(Subscription);

	subscriptionMock
		.expects("find")
		.withArgs(subscriptionParams)
		.yields(null, expectedSubscription);

	Subscription.find(subscriptionParams, (err, result) => {
		subscriptionMock.verify();
		subscriptionMock.restore();
		expect(result.arn).to.equal(subscriptionParamsTest);
		done();
	});
}


// TESTS
// =============================================================================

// model
describe("Subscription Model", () => {
	// add
	it("should create a new subscription entry", add);
	// error if add fails
	it("should return error if subscription is not created", addError);
	// find
	it("should find subscription by params", findByParams);
});

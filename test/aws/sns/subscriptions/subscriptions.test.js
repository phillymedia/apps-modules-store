/* eslint-disable prefer-arrow-callback */

// DEPENDENCIES
// =============================================================================

import setup from "./utils/setup";
import add from "./set/add.test";
import addMany from "./set/addMany.test";
import get from "./get/all.test";
import getByEndpoint from "./get/byEndpoint.test";
import getByTopicArn from "./get/byTopicArn.test";
import getByUsername from "./get/byUsername.test";


// TESTS
// =============================================================================

describe("AWS - Subscriptions", function () {
	// add (use this data for other tests)
	describe("Add", function () {
		context("when structured correctly", function () {
			it("sets datum correctly", add.noErrors);
			it("sets data array correctly", addMany.noErrors);
		});
	});
	// all
	describe("Get All", function () {
		// everything going right
		context("when structured correctly", function () {
			it("returns correct data", get.noErrors);
		});
	});
	// by arn
	describe("Get By Endpoint", function () {
		// everything going right
		context("when structured correctly", function () {
			it("returns correct data", getByEndpoint.noErrors);
		});
	});
	// by token
	describe("Get By Topic ARN", function () {
		// everything going right
		context("when structured correctly", function () {
			it("returns correct data", getByTopicArn.noErrors);
		});
	});
	// by username
	describe("Get By Username", function () {
		// everything going right
		context("when structured correctly", function () {
			it("returns correct data", getByUsername.noErrors);
		});
	});
});

// after
after(setup.cleanup);

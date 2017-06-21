/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
import { db as mongoose } from "COMP/db";
import { expect } from "chai";
import sinon from "sinon";
require("sinon-mongoose");

// PRIVATE VARIABLES
// =============================================================================
// model
const Log = require("APP/models/Log");
// reusable variables for testing.
const logParamsTest = "phillycom";
const testLog = {
	target: logParamsTest,
	message: "This is a test.",
};
const logParams = testLog;
const expectedLog = {
	target: logParamsTest,
	message: "This is a test.",
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
	const LogMock = sinon.mock(new Log(testLog));
	const log = LogMock.object;

	LogMock
		.expects("save")
		.yields(null);

	// eslint-disable-next-line no-unused-vars
	log.save((err, result) => {
		LogMock.verify();
		LogMock.restore();
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
	const LogMock = sinon.mock(new Log(testLog));
	const log = LogMock.object;
	const expectedError = {
		name: "ValidationError",
	};

	LogMock
		.expects("save")
		.yields(expectedError);

	log.save((err, result) => {
		LogMock.verify();
		LogMock.restore();
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
	const logMock = sinon.mock(Log);

	logMock
		.expects("find")
		.withArgs(logParams)
		.yields(null, expectedLog);

	Log.find(logParams, (err, result) => {
		logMock.verify();
		logMock.restore();
		expect(result.target).to.equal(logParamsTest);
		done();
	});
}

/**
 * Test the find method.
 *
 * @method findRecent
 * @param {function} done
 * @return {function}
 */
function findRecent(done) {
	const logMock = sinon.mock(Log);
	const recentLogParams = {
		limit: 5,
		sort: {
			date: "desc",
		},
	};

	logMock
		.expects("find")
		.withArgs(recentLogParams)
		.yields(null, "SOME_VALUE");

	Log.find(recentLogParams, (err, result) => {
		logMock.verify();
		logMock.restore();
		expect(result).to.equal("SOME_VALUE");
		done();
	});
}


// TESTS
// =============================================================================

// log
describe("Log Model", () => {
	// add
	it("should create a new log", add);
	// error if add fails
	it("should return error if log is not created", addError);
	// find by id
	it("should find log by target and message", findByParams);
	// find most x recent
	it("should find the most recent logs", findRecent);
});

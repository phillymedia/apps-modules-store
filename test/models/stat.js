/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// eslint-disable-next-line no-unused-vars
const mongoose = require("../../src/").db;
const { expect } = require("chai");
const sinon = require("sinon");
require("sinon-mongoose");

// PRIVATE VARIABLES
// =============================================================================
// path
const modelsPath = "../../src/models";
// model
const Stat = require(`${modelsPath}/Feed`);
// reusable variables for testing.
const testStatContent = { count: { total: 324, withSubs: 189, withoutSubs: 135 } };
const testStat = {
	expireAt: new Date(),
	name: "terms",
	content: testStatContent,
};
const statParams = { name: "terms" };
const expectedStat = {
	name: "terms",
	content: testStatContent,
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
	const StatMock = sinon.mock(new Stat(testStat));
	const stat = StatMock.object;

	StatMock
		.expects("save")
		.yields(null);

	// eslint-disable-next-line no-unused-vars
	stat.save((err, result) => {
		StatMock.verify();
		StatMock.restore();
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
	const StatMock = sinon.mock(new Stat(testStat));
	const stat = StatMock.object;
	const expectedError = {
		name: "ValidationError",
	};

	StatMock
		.expects("save")
		.yields(expectedError);

	stat.save((err, result) => {
		StatMock.verify();
		StatMock.restore();
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
	const statMock = sinon.mock(Stat);

	statMock
		.expects("find")
		.withArgs(statParams)
		.yields(null, expectedStat);

	Stat.find(statParams, (err, result) => {
		statMock.verify();
		statMock.restore();
		expect(result.content).to.equal(testStatContent);
		done();
	});
}

// TESTS
// =============================================================================

/**
 * Logs test methods.
 *
 * @method tests
 */
function tests() {
	// add
	it("should create a new stat entry", add);
	// error if add fails
	it("should return error if stat entry is not created", addError);
	// find
	it("should find stat by name", findByParams);
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	tests,
};

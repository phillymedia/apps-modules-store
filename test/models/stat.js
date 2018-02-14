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
const Stat = require("APP/models/Stat");
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

// stat
describe("Stat Model", () => {
  // add
  it("should create a new stat entry", add);
  // error if add fails
  it("should return error if stat entry is not created", addError);
  // find
  it("should find stat by name", findByParams);
});

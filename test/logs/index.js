/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { logs } from "MAIN";
import { database as _database } from "APP/config";

// PRIVATE VARIABLES
// =============================================================================
// make sure the log is at the end of our logs
const logDate = new Date();
logDate.setYear(logDate.getFullYear() - 1);
// expected log
const expectedLog = {
  target: "phillycom",
  message: "This is a test.",
};
// test log to insert
const testLog = {
  article_id: 123,
  date: logDate,
  target: "phillycom",
  message: "This is a test.",
};


// MAIN METHODS
// =============================================================================

/**
 * Test the get method.
 *
 * @param {function} done
 * @return {function}
 */
function get(done) {
  logs.get({ limit: _database.logs.view }, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the add method.
 *
 * @param {function} done
 * @return {function}
 */
function add(done) {
  // add a log
  logs.add(testLog, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("object")
      .which.has.property("id")
      .that.equals(testLog.id);
    return done();
  }, true);
}

/**
 * Test the exists method.
 *
 * @param {function} done
 * @return {function}
 */
function exists(done) {
  // add a log
  logs.exists(expectedLog, (err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.a("boolean");
    return done();
  });
}


// TESTS
// =============================================================================

// describe the logs store
describe("Logs Store", function () {
  // getter - data
  describe("Get", () => {
    it("gets the most recent logs", get);
  });
  // setter - data
  describe("Adds", () => {
    it("adds a log", add);
  });
  // setter
  describe("Exists", () => {
    it("checks to see if a message has already been sent", exists);
  });
});
// run once after all tests
// after(callAfterLogs);

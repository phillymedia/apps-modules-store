/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { stats } from "MAIN";
import { store as _store } from "APP/config";
import { log } from "philly-helpers";
import _schema from "./schema";

// BEFORE AND AFTER
// =============================================================================

// clean-up
let deleteAfterRun = false; // eslint-disable-line no-unused-vars

/**
 * SES before method.
 *
 * @method callBefore
 * @param {function} done
 * @return {function}
 */
function callBefore(done) {
  // test if database is populated
  _schema.count({ source: _store.admin })
    .then((count) => {
      if (count === 0) {
        // no content so safe to delete
        deleteAfterRun = true;
        // add test data
        // return fixtures.ensureTestData();
      }
      else {
        log.debug("Test database already exists");
      }
    })
    .then(done);
}

/**
 * SES after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
/*
function callAfterStatsSES(done) {
  // delete after run
  if (deleteAfterRun) {
    // delete test content inserted into the databases
    log.debug("Deleting test SES content...");
    // clear ses
    stats.clearSes((err) => {
      // handle errors
      if (err) {
        log.error(err);
      }
      // otherwise...
      log.debug("Successfully deleted.");
      // callback
      return done();
    });
  }
  // otherwise...
  return done();
}
*/


// MAIN METHODS
// =============================================================================

/**
 * Test the getSesCount method.
 *
 * @method getCount
 * @param {function} done
 * @return {function}
 */
function getCount(done) {
  stats.getSesCount((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSesCount method.
 *
 * @method setCount
 * @param {function} done
 * @return {function}
 */
function setCount(done) {
  // get sports feed
  stats.getSesCount((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return stats.setSesCount(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    log.error("Data didn't get set!");
    return done();
  });
}

/**
 * Test the getSesData method.
 *
 * @method getData
 * @param {function} done
 * @return {function}
 */
function getData(done) {
  stats.getSesData((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setSesData method.
 *
 * @method setData
 * @param {function} done
 * @return {function}
 */
function setData(done) {
  stats.getSesData((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return stats.setSesData(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    log.error("Data didn't get set!");
    return done();
  });
}


// TESTS
// =============================================================================

// run once before all tests
before(callBefore);
// describe the stats store
describe("SES Stats Store", () => {
  // getter - count
  describe("Get SES Count", () => {
    it("gets the SES count", getCount);
  });

  // setter - count
  describe("Set SES Count", () => {
    it("gets the SES count and immediately sets it", setCount);
  });

  // getter - data
  describe("Get SES Data", () => {
    it("gets the current data", getData);
  });

  // setter - data
  describe("Set SES Data", () => {
    it("gets the current data and immediately sets it", setData);
  });
});

// run once callAfter all tests
// after(callAfterStatsSES);

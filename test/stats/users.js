/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================

import { expect } from "chai";
import { stats } from "MAIN";
import { log } from "philly-helpers";


// MAIN METHODS
// =============================================================================

/**
 * Test the getUsers method.
 *
 * @param {function} done
 * @return {function}
 */
function get(done) {
  stats.getUsers((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    return done();
  });
}

/**
 * Test the setUsers method.
 *
 * @param {function} done
 * @return {function}
 */
function set(done) {
  stats.getUsers((err, data) => {
    expect(err).to.be.null;
    expect(data).to.be.an("array");
    // data has value (expected)
    if (data) {
      // set with returned data
      return stats.setUsers(data, (newErr, newData) => {
        expect(newErr).to.be.null;
        expect(newData).to.be.an("array");
        return done();
      });
    }
    // otherwise
    log.error("Data didn't get set!");
    return done();
  });
}


// TESTS
// =============================================================================

// before
// describe the stats store
describe("Users Stats Store", () => {
  // getter - data
  describe("Get Users", () => {
    it("gets the current data", get);
  });

  // setter - data
  describe("Set Users", () => {
    it("gets the current data and immediately sets it", set);
  });
});

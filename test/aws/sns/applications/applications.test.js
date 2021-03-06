/* eslint-disable prefer-arrow-callback */

// DEPENDENCIES
// =============================================================================

// import setup from "./utils/setup";
import add from "./set/add.test";
import addMany from "./set/addMany.test";
import get from "./get/all.test";
import getByHint from "./get/byHint.test";


// TESTS
// =============================================================================

describe("AWS - Application", function () {
  // add (use this data for other tests)
  describe("Add", function () {
    context("when structured correctly", function () {
      it("sets data correctly", add.noErrors);
    });
    context("when setting multiple", function () {
      it("sets data correctly", addMany.noErrors);
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
  describe("Get By Hint", function () {
    // everything going right
    context("when structured correctly", function () {
      it("returns correct data", getByHint.noErrors);
    });
  });
});

// after
// after(setup.cleanup);

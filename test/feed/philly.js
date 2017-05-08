/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("@/app.js");
const feed = app.feed;

// test category
const testCat = "test_category";
const expectedContent = [];
expectedContent.push({
	testValue: "Working.",
});

// BEFORE AND AFTER
// =============================================================================

/**
 * Philly.com after method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function callAfter(done) {
	// delete test content inserted into the databases
	console.log("Deleting test philly.com content...");
	// fake philly articles
	feed.clearArticlesPhilly(testCat, (err) => {
		// handle errors
		if (err) {
			console.error(err);
		}
		// otherwise...
		console.log("Successfully deleted.");
		// callback
		return done();
	});
}


// MAIN METHODS
// =============================================================================

/**
 * Test the getArticlesPhilly method.
 *
 * @method getArticles
 * @param {function} done
 * @return {function}
 */
function getArticles(done) {
	feed.getArticlesPhilly(testCat, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setArticlesPhilly method.
 *
 * @method setArticles
 * @param {function} done
 * @return {function}
 */
function setArticles(done) {
	feed.setArticlesPhilly(testCat, expectedContent, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		expect(data).to.deep.equal(expectedContent);
		return done();
	});
}

/**
 * Test the getArticlesTodayPhilly method.
 *
 * @method getArticlesToday
 * @param {function} done
 * @return {function}
 */
function getArticlesToday(done) {
	feed.getArticlesTodayPhilly(testCat, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setArticlesTodayPhilly method.
 *
 * @method setArticlesToday
 * @param {function} done
 * @return {function}
 */
function setArticlesToday(done) {
	feed.setArticlesTodayPhilly(testCat, expectedContent, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		expect(data).to.deep.equal(expectedContent);
		return done();
	});
}

/**
 * Test the getArticlesTodayPhilly method.
 *
 * @method getArticlesWatch
 * @param {function} done
 * @return {function}
 */
function getArticlesWatch(done) {
	feed.getArticlesWatchPhilly(testCat, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		return done();
	});
}

/**
 * Test the setArticlesTodayPhilly method.
 *
 * @method setArticlesWatch
 * @param {function} done
 * @return {function}
 */
function setArticlesWatch(done) {
	feed.setArticlesWatchPhilly(testCat, expectedContent, (err, data) => {
		expect(err).to.be.null;
		expect(data).to.be.an("array");
		expect(data).to.deep.equal(expectedContent);
		return done();
	});
}


// TESTS
// =============================================================================

/**
 * Philly.com test methods.
 *
 * @method tests
 */
function tests() {
	// main app
	// getter
	describe("Get Articles Philly", () => {
		it("gets the current articles", getArticles);
	});
	// setter
	describe("Set Articles Philly", () => {
		it("sets the current articles", setArticles);
	});
	// today extension
	// getter
	describe("Get Articles Today Philly", () => {
		it("gets the current today ext articles", getArticlesToday);
	});
	// setter
	describe("Set Articles Today Philly", () => {
		it("sets the current today ext articles", setArticlesToday);
	});
	// watch extension
	// getter
	describe("Get Articles Watch Philly", () => {
		it("gets the current watch articles", getArticlesWatch);
	});
	// setter
	describe("Get Articles Watch Philly", () => {
		it("sets the current watch articles", setArticlesWatch);
	});
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	tests,
	callAfter,
};

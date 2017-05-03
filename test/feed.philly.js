/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const { expect } = require("chai");
const app = require("../index");
const feed = app.feed;

// test category
const testCat = "test_category";


/**
 * Test feed store.
 */
describe("Philly.com Feed Store", () => {
	const expectedContent = [];
	expectedContent.push({
		testValue: "Working.",
	});

	// philly.com
	// getter
	describe("Get Articles Philly", () => {
		it("gets the current articles", (done) => {
			feed.getArticlesPhilly(testCat, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter
	describe("Set Articles Philly", () => {
		it("sets the current articles", (done) => {
			feed.setArticlesPhilly(testCat, expectedContent, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				expect(data).to.deep.equal(expectedContent);
				return done();
			});
		});
	});

	// today extension
	// getter
	describe("Get Articles Watch Philly", () => {
		it("gets the current watch articles", (done) => {
			feed.getArticlesTodayPhilly(testCat, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter
	describe("Get Articles Watch Philly", () => {
		it("sets the current watch articles", (done) => {
			feed.setArticlesTodayPhilly(testCat, expectedContent, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				expect(data).to.deep.equal(expectedContent);
				return done();
			});
		});
	});

	// watch extension
	// getter
	describe("Get Articles Today Philly", () => {
		it("gets the current today ext articles", (done) => {
			feed.getArticlesTodayPhilly(testCat, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				return done();
			});
		});
	});

	// setter
	describe("Set Articles Today Philly", () => {
		it("sets the current today ext articles", (done) => {
			feed.setArticlesTodayPhilly(testCat, expectedContent, (err, data) => {
				expect(err).to.be.null;
				expect(data).to.be.an("array");
				expect(data).to.deep.equal(expectedContent);
				return done();
			});
		});
	});
});


// run once after all tests
after((done) => {
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
});

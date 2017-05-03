/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// eslint-disable-next-line no-unused-vars
const mongoose = require("mongoose");
const { expect } = require("chai");
const sinon = require("sinon");
require("sinon-mongoose");


/**
 * Test feed model.
 */

// model
const Feed = require("../models/Feed");
// reusable variables for testing.
const testFeed = {
	source: "philly_app",
	name: "entertainment",
};
const feedParams = { source: "philly_app", name: "entertainment" };
const feedParamsTest = "philly_app";
const expectedFeed = {
	_id: "5700a128bd97c1341d8fb365",
	source: "philly_app",
	name: "entertainment",
};
// tests
describe("Feed Model", () => {
	it("should create a new feed entry", (done) => {
		const FeedMock = sinon.mock(new Feed(testFeed));
		const feed = FeedMock.object;

		FeedMock
			.expects("save")
			.yields(null);

		// eslint-disable-next-line no-unused-vars
		feed.save((err, result) => {
			FeedMock.verify();
			FeedMock.restore();
			expect(err).to.be.null;
			done();
		});
	});

	it("should return error if feed is not created", (done) => {
		const FeedMock = sinon.mock(new Feed(testFeed));
		const feed = FeedMock.object;
		const expectedError = {
			name: "ValidationError",
		};

		FeedMock
			.expects("save")
			.yields(expectedError);

		feed.save((err, result) => {
			FeedMock.verify();
			FeedMock.restore();
			expect(err.name).to.equal("ValidationError");
			expect(result).to.be.undefined;
			done();
		});
	});

	it("should find feed by params", (done) => {
		const feedMock = sinon.mock(Feed);

		feedMock
			.expects("find")
			.withArgs(feedParams)
			.yields(null, expectedFeed);

		Feed.find(feedParams, (err, result) => {
			feedMock.verify();
			feedMock.restore();
			expect(result.source).to.equal(feedParamsTest);
			done();
		});
	});
});


/**
 * Test log model.
 */

// model
const Log = require("../models/Log");
// reusable variables for testing.
const testLog = {
	date: new Date(),
	target: "phillycom",
	message: "This is a test.",
};
const logParams = { _id: "5700a128bd97c1341d8fb365" };
const logParamsTest = "5700a128bd97c1341d8fb365";
const expectedLog = {
	_id: "5700a128bd97c1341d8fb365",
	target: "phillycom",
	message: "This is a test.",
};
// tests
describe("Log Model", () => {
	it("should create a new log", (done) => {
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
	});

	it("should return error if log is not created", (done) => {
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
	});

	it("should find log by ID", (done) => {
		const logMock = sinon.mock(Log);

		logMock
			.expects("findById")
			.withArgs(logParams)
			.yields(null, expectedLog);

		Log.findById(logParams, (err, result) => {
			logMock.verify();
			logMock.restore();
			expect(result._id).to.equal(logParamsTest);
			done();
		});
	});

	it("should find the most recent logs", (done) => {
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
	});
});


/**
 * Test stat model.
 */

// model
const Stat = require("../models/Stat");
// reusable variables for testing.
const testStatContent = { count: { total: 324, withSubs: 189, withoutSubs: 135 } };
const testStat = {
	expireAt: new Date(),
	name: "terms",
	content: testStatContent,
};
const statParams = { name: "terms" };
const expectedStat = {
	_id: "5700a128bd97c1341d8fb365",
	name: "terms",
	content: testStatContent,
};
// tests
describe("Stat Model", () => {
	it("should create a new stat entry", (done) => {
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
	});

	it("should return error if stat entry is not created", (done) => {
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
	});

	it("should find stat by name", (done) => {
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
	});
});

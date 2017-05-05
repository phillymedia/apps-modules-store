/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

// dependencies
const models = require("./models");
const feed = require("./feed");
const logs = require("./logs");
const stats = require("./stats");

// models
// feed
describe("Feed Model", models.feed.tests);
// log
describe("Log Model", models.log.tests);
// stat
describe("Stat Model", models.stat.tests);

// feed
// philly.com
// describe the feed store
describe("Philly.com Feed Store", feed.philly.tests);
// run once after all tests
after(feed.philly.callAfter);
// sports now
// run once before all tests
before(feed.sports.callBefore);
// describe the feed store
describe("Sports Now Feed Store", feed.sports.tests);
// run once after all tests
after(feed.sports.callAfter);

// logs
// describe the logs store
describe("Logs Store", logs.tests);
// run once after all tests
after(logs.callAfter);

// stats
// ses
// run once before all tests
before(stats.ses.callBefore);
// describe the stats store
describe("SES Stats Store", stats.ses.tests);
// run once callAfter all tests
after(stats.ses.callAfter);
// subscriptions
// run once before all tests
before(stats.subscriptions.callBefore);
// describe the stats store
describe("Subscriptions Stats Store", stats.subscriptions.tests);
// run once after all tests
after(stats.subscriptions.callAfter);

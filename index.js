/**
 * PHILLY STORE APP
 *
 * Hopefully reusable class of functions.
 **/

// MOST DEPENDENCIES
// =============================================================================
const feed = require("./controllers/feed");
const stats = require("./controllers/stats");
const logs = require("./controllers/logs");


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	// feed store
	feed: {
		// philly.com
		getArticlesPhilly: feed.getArticlesPhilly,
		setArticlesPhilly: feed.setArticlesPhilly,
		getArticlesPhillyBrief: feed.getArticlesPhillyBrief,
		setArticlesPhillyBrief: feed.setArticlesPhillyBrief,
		// sports now
		getSportsFeed: feed.getSportsFeed,
		setSportsFeed: feed.setSportsFeed,
		getSportsTweets: feed.getSportsTweets,
		setSportsTweets: feed.setSportsTweets,
		getSportsGames: feed.getSportsGames,
		setSportsGames: feed.setSportsGames,
		// today extension
		getArticlesTodayPhilly: feed.getArticlesTodayPhilly,
		setArticlesTodayPhilly: feed.setArticlesTodayPhilly,
		// watch extension
		getArticlesWatchPhilly: feed.getArticlesWatchPhilly,
		setArticlesWatchPhilly: feed.setArticlesWatchPhilly,
	},
	// logs store
	logs: {
		// add a new item
		add: logs.add,
		// is there already an item with these params?
		exists: logs.exists,
		// find all items
		findAll: logs.findAll,
		// find one item by ID
		// findById: logs.findById,
	},
	// stats store
	stats: {
		// SES - COUNT -------------------------------
		// get
		getSesCount: stats.getSesCount,
		// set
		setSesCount: stats.setSesCount,
		// SES - DATA -------------------------------
		// get
		getSesData: stats.getSesData,
		// set
		setSesData: stats.setSesData,
		// TERMS -------------------------------
		// get
		getTerms: stats.getTerms,
		// set
		setTerms: stats.setTerms,
		// clear
		clearTerms: stats.clearTerms,
		// SUBSCRIPTIONS -------------------------------
		// get
		getSubscriptions: stats.getSubscriptions,
		// set
		setSubscriptions: stats.setSubscriptions,
		// clear
		clearSubscriptions: stats.clearSubscriptions,
		// ENDPOINTS -------------------------------
		// get
		getUsers: stats.getUsers,
		// set
		setUsers: stats.setUsers,
		// clear
		clearUsers: stats.clearUsers,
		// MISC -------------------------------
		// clear
		clearStats: stats.clearStats,
	},
};

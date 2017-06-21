/**
* STORE APP
* configure settings
* Global settings, imported by other configs.
**/

// third-party libraries
// const _ = require("lodash");
// this module
const Main = {};

// DB - STORES -------------------------------
// the node store settings
// variables
const typesSport = {
	combined: "combined",
	articles: "articles",
	games: "games",
	tweets: "tweets",
};
const typesArticle = {
	articles: "articles",
};
// settings
Main.store = {};
// sports
Main.store.sports = {
	name: "sports",
	source: "sports_app",
	type: typesSport,
};
// main
Main.store.main = {
	source: "philly_app",
	type: typesArticle,
};
// today
Main.store.today = {
	source: "philly_today",
	type: typesArticle,
};
// watch
Main.store.watch = {
	source: "philly_watch",
	type: typesArticle,
};
// admin section
Main.store.admin = {};
// log section
Main.store.log = {
	collectionName: "logs",
	collectionSize: 5242880,
	collectionMax: 40,
};
// detail section
Main.store.detail = {
	collectionName: "details",
	collectionSize: 5242880,
	collectionMax: 5,
};


// EXPORT
// =============================================================================
module.exports = Main;

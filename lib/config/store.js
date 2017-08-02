// PROPERTIES
// =============================================================================
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
const typesMain = {
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
	type: typesMain,
};
// search
Main.store.search = {
	source: "philly_app",
	type: "search",
};
// search
Main.store.sections = {
	source: "philly_app",
	type: "sections",
};
// today
Main.store.today = {
	source: "philly_today",
	type: typesMain,
};
// watch
Main.store.watch = {
	source: "philly_watch",
	type: typesMain,
};
// admin section
Main.store.admin = {};
// log section
Main.store.log = {
	collectionName: "logs",
	collectionSize: 10485760, // 10MB
	collectionMax: 40,
};
// detail section
Main.store.detail = {
	collectionName: "details",
	collectionSize: 10485760, // 10MB
	collectionMax: 100,
};


// EXPORT
// =============================================================================
module.exports = Main;

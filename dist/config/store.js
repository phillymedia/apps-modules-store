"use strict";

/**
* STORE APP
* configure settings
* Global settings, imported by other configs.
**/

// third-party libraries
// const _ = require("lodash");
// this module
var Main = {};

// DB - STORES -------------------------------
// the node store settings
// variables
var typesSport = {
	combined: "combined",
	articles: "articles",
	games: "games",
	tweets: "tweets"
};
var typesArticle = {
	articles: "articles"
};
// settings
Main.store = {};
// sports
Main.store.sports = {
	name: "sports",
	source: "sports_app",
	type: typesSport
};
// main
Main.store.main = {
	source: "philly_app",
	type: typesArticle
};
// today
Main.store.today = {
	source: "philly_today",
	type: typesArticle
};
// watch
Main.store.watch = {
	source: "philly_watch",
	type: typesArticle
};
// admin section
Main.store.admin = {};
// detail section
Main.store.detail = {
	collectionName: "details",
	collectionSize: 5
};

// EXPORT
// =============================================================================
module.exports = Main;
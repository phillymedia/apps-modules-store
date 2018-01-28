"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// PROPERTIES
// =============================================================================
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
var typesMain = {
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
Main.store.sportsLegacy = {};
Main.store.sportsLegacy.v1 = {
  name: "sports",
  source: "sports_app_legacy",
  type: typesSport
};
// main
Main.store.main = {
  source: "philly_app",
  type: typesMain
};
Main.store.mainLegacy = {};
Main.store.mainLegacy.v1 = {
  source: "philly_app_legacy",
  type: typesMain
};
// search
Main.store.search = {
  source: "philly_app",
  type: "search"
};
Main.store.searchLegacy = {};
Main.store.searchLegacy.v1 = {
  source: "philly_app_legacy",
  type: "search"
};
// sections
Main.store.sections = {
  source: "philly_app",
  type: "sections"
};
// today
Main.store.today = {
  source: "philly_today",
  type: typesMain
};
// watch
Main.store.watch = {
  source: "philly_watch",
  type: typesMain
};
// admin section
Main.store.admin = {};
// log section
Main.store.log = {
  collectionName: "logs",
  collectionSize: 10485760, // 10MB
  collectionMax: 40
};
// detail section
Main.store.detail = {
  collectionName: "details",
  collectionSize: 10485760, // 10MB
  collectionMax: 100
};

// EXPORT
// =============================================================================
exports.default = Main;
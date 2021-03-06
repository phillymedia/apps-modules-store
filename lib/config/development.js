// import global settings
import Main from "./global";

// TEST
// =============================================================================
// change settings for development
// SETTINGS -------------------------------
Main.env = "development";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 10;

// STORE -------------------------------
// the store settings
// variables
// 15 minutes
const shortExpires = 15;
// one hour
const longExpires = 60;
// one day
const vLongExpires = 1440;
Main.store.sports.expiresInMinutes = {
  combined: shortExpires,
  articles: shortExpires,
  games: shortExpires,
  tweets: shortExpires,
};
Main.store.sportsLegacy.v1.expiresInMinutes = {
  combined: shortExpires,
  articles: shortExpires,
  games: shortExpires,
  tweets: shortExpires,
};
Main.store.main.expiresInMinutes = shortExpires;
Main.store.mainLegacy.v1.expiresInMinutes = shortExpires;
Main.store.search.expiresInMinutes = vLongExpires;
Main.store.searchLegacy.v1.expiresInMinutes = vLongExpires;
Main.store.sections.expiresInMinutes = vLongExpires;
Main.store.watch.expiresInMinutes = shortExpires;
Main.store.today.expiresInMinutes = shortExpires;
Main.store.admin.expiresInMinutes = longExpires;
Main.store.detail.expiresInMinutes = longExpires;


// EXPORT
// =============================================================================
export default Main;

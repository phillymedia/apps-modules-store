// import DEV version of global settings
import Main from "./development";

// TEST
// =============================================================================
// change settings for test
// SETTINGS -------------------------------
Main.env = "test";

// DB -------------------------------
// put it all together...
Main.database.logs.limit = 10;


// EXPORT
// =============================================================================
export default Main;

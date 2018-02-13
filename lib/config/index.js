// grab environment variables
// grab environment
const env = process.env.NODE_ENV
  // npm
  || process.env.npm_config_environment
  || process.env.npm_package_config_environment
  // default
  || "production";
// grab debug mode
const debug = (process.env.DEBUG === "true" || process.env.DEBUG === true)
  // (we use a separate debugmode process so as not to turn on the debug mode in OTHER modules)
  || (process.env.DEBUGMODE === "true")
  // npm
  || (process.env.npm_config_debugmode === "true");

// import config based on environment
const Main = require(`./${env}`).default;
// add debug from command line
Main.debug = debug;
// export completed config file
module.exports = Main;

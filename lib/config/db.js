const dbpass = process.env.MONGO_DB_PASS
  // npm
  || process.env.npm_config_db_pass
  || process.env.npm_package_config_db_pass;

// third-party libraries
// this module
const Main = {};

// DB -------------------------------
Main.database = {};
Main.database.server = "localhost";
Main.database.port = 27017;
Main.database.db = "notifications";
Main.database.logs = {};
Main.database.logs.view = 5;
Main.database.user = "notifsUser";
Main.database.url = `mongodb://${Main.database.user}:${dbpass}@${Main.database.server}:${Main.database.port}/${Main.database.db}`;

Main.database.errors = {
  duplicate: 11000,
};

// EXPORT
// =============================================================================
export default Main;

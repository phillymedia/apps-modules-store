// dependencies
// import _ from "lodash";
// import app from "./app";
import { forEach } from "lodash";
import db from "./db";
import store from "./store";

// create Main
const Main = {};

// DATABASE SETTINGS
// ==============
// add db settings
forEach(db, (setting, key) => {
	Main[key] = setting;
});

// STORE SETTINGS
// =============================================================================
// add store settings
forEach(store, (setting, key) => {
	Main[key] = setting;
});


// EXPORT
// =============================================================================
export default Main;

// dependencies
// import _ from "lodash";
// import app from "./app";
import { forEach } from "lodash";
import db from "./db";
import store from "./store";

// create Main
const Main = {};

// APP SETTINGS
// =============================================================================
forEach([db, store], settings => forEach(settings, (setting, key) => {
  Main[key] = setting;
}));


// EXPORT
// =============================================================================
export default Main;

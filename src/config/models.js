/**
* STORE APP
* configure settings
* Global settings, imported by other configs.
**/

// third-party libraries
// const _ = require("lodash");
// this module
const Main = {};

// DB - MODELS -------------------------------
const modelsPath = "./src/models/";
Main.models = [
	`${modelsPath}Feed`,
	`${modelsPath}Log`,
	`${modelsPath}Stat`,
];

// EXPORT
// =============================================================================
module.exports = Main;

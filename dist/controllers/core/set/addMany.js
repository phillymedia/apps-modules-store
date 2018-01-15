"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Generic function to insert new reords.
 *
 * @method add
 * @param {object} Schema 					The schema used by the parent module.
 * @param {array} documents					The array of documents to insert.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */
function addMany(Schema, documents, callback) {
	// create the item from params
	// (this will validate based on the schema)
	// const schema = new Schema(params);
	// save array of documents
	/*
 Schema.insertMany(documents)
 	.then(data => callback(null, data))
 	.catch(err => callback(formatError(err)));
 */
	Schema.insertMany(documents, function (err, data) {
		// handle errors
		if (err) {
			return callback((0, _phillyHelpers.formatError)(err));
		}
		// otherwise...
		return callback(null, data);
	});
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = addMany;
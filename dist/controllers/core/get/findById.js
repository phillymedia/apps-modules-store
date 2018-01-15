"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phillyHelpers = require("philly-helpers");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get an item by its ID.
 *
 * @method findById
 * @param {object} Schema 					The schema used by the parent module.
 * @param {string} id						The ID to search by.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */
function findById(Schema, id, callback) {
	// find the item
	var query = Schema.findById(id);
	// make the query lean
	query.lean();
	// execute the query
	query.exec(function (err, item) {
		// handle errors
		if (err) {
			return callback((0, _phillyHelpers.formatError)(err));
		}
		// missing item
		if (!item) {
			return callback((0, _phillyHelpers.makeError)("MissingID", "Cannot find item.", "main core"));
		}
		// next!
		return callback(err, item);
	});
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = findById;
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phillyHelpers = require("philly-helpers");

var _remove = require("./remove");

var _remove2 = _interopRequireDefault(_remove);

var _get = require("../get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Clear out records based on given parameters.
 *
 * @method clearOld
 * @param {object} Schema 					The schema used by the parent module.
 * @param {object} params					The details of the search.
 * @param {function} callback				A callback function.
 * @return {function} 						Returns error or array.
 */

// siblings
function clearOld(Schema, params, callback) {
	// find the oldest
	(0, _get.find)(Schema, params, function (err, limitItem) {
		// handle errors
		if (err) {
			return callback((0, _phillyHelpers.formatError)(err));
		}
		// not at our limit
		if (!limitItem || !limitItem.length) {
			return callback();
		}
		// otherwise, get the date of that item and update params
		params = { date: { $lt: limitItem[0].date } };
		// remove
		return (0, _remove2.default)(Schema, params, callback);
	});
}

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
exports.default = clearOld;
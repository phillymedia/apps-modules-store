// DEPENDENCIES
// =============================================================================
// APP -------------------------------
import { db } from "COMP/db";
// sub-modules
import core from "COMP/aws/core";
// model
const _schema = db.model("Application");


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of applications.
 *
 * @method all
 * @param {function} callback
 */
function all(callback) {
	// schema
	const settings = {
		schema: _schema,
	};
	// get the app, if it's in oure store
	return core.findAll(settings, callback);
}

/**
 * Get app from hint.
 *
 * @method byHint
 * @param {string} appHint
 * @param {function} callback
 */
function byHint(appHint, callback) {
	// settings
	const settings = {
		schema: _schema,
		hint: appHint,
		field: "arn",
	};
	// get the app, if it's in oure store
	return core.findByHint(settings, callback);
}


// EXPORTS
// =============================================================================

export default {
	all,
	byHint,
};
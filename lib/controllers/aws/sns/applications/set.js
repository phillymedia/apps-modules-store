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
 * Add an SNS application to the list.
 *
 * @method addApplicationremove.js
 * @param {object} application
 * @param {function} callback
 */
function add(application, callback) {
	// settings
	const settings = {
		schema: _schema,
		arn: application.PlatformApplicationArn,
		attributes: application.Attributes,
	};
	// get the app, if it's in oure store
	return core.add(settings, callback);
}


// EXPORTS
// =============================================================================

export default {
	add,
};

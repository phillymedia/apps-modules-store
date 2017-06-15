// DEPENDENCIES
// =============================================================================
import core from "COMP/aws/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of applications.
 *
 * @method getApplications
 * @param {function} callback
 */
function getApplications(callback) {
	// get the app, if it's in oure store
	return core.findAll(callback);
}

/**
 * Get app ARN from hint.
 *
 * @method getApplicationByHint
 * @param {string} appHint
 * @param {function} callback
 */
function getApplicationByHint(appHint, callback) {
	// settings
	const settings = {
		hint: appHint,
		field: "arn",
	};
	// get the app, if it's in oure store
	return core.findByHint(settings, callback);
}

/**
 * Add an SNS application to the list.
 *
 * @method addApplication
 * @param {object} application
 * @param {function} callback
 */
function addApplication(application, callback) {
	// settings
	const settings = {
		hint: application,
	};
	// get the app, if it's in oure store
	return core.add(settings, callback);
}


// EXPORTS
// =============================================================================

export default {
	addApplication,
	getApplications,
	getApplicationByHint,
};

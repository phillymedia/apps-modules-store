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
 * @method add
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

/**
 * Add to store.
 *
 * @method addMany
 * @param {array} contents 					Data to store.
 * @param {function} callback				A callback function.
 * @return {function} core.addMany			The shared setter.
 */
function addMany(contents, callback) {
	// settings
	const settings = {
		schema: _schema,
	};
	// we have to do an async map on the other side,
	// so let's not also do it here -- pulling ID from
	// content at the same time as everything else
	return core.addMany(settings, contents, callback);
}


// EXPORTS
// =============================================================================

export {
	add,
	addMany,
};

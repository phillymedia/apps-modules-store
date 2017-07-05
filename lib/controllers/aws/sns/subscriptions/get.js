// DEPENDENCIES
// =============================================================================
// APP -------------------------------
import { db } from "COMP/db";
// sub-modules
import core from "COMP/aws/core";
// model
const _schema = db.model("Subscription");


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of subscriptions.
 *
 * @method all
 * @param {function} callback
 */
function all(callback) {
	// schema
	const settings = {
		schema: _schema,
	};
	// get the sub, if it's in our store
	return core.findAll(settings, callback);
}

/**
 * Get subscription from endpoint ARN.
 *
 * @method byEndpoint
 * @param {string} arn
 * @param {function} callback
 */
function byEndpoint(arn, callback) {
	// settings
	const settings = {
		schema: _schema,
		param: arn,
		field: "endpoint",
	};
	// get the sub, if it's in our store
	return core.findByParam(settings, callback);
}

/**
 * Get subscription from topic ARN.
 *
 * @method byTopicArn
 * @param {string} arn
 * @param {function} callback
 */
function byTopicArn(arn, callback) {
	// settings
	const settings = {
		schema: _schema,
		param: arn,
		field: "topic",
	};
	// get the sub, if it's in our store
	return core.findByParam(settings, callback);
}

/**
 * Get subscriptions from username.
 *
 * @method byUsername
 * @param {string} username
 * @param {function} callback
 */
function byUsername(username, callback) {
	// settings
	const settings = {
		schema: _schema,
		attr: username,
		field: "CustomUserData",
	};
	// get the sub, if it's in our store
	return core.findByAttribute(settings, callback);
}


// EXPORTS
// =============================================================================

export {
	all,
	byEndpoint,
	byTopicArn,
	byUsername,
};

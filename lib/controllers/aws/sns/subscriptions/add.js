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
 * Add to store.
 *
 * @method add
 * @param {object} subscription
 * @param {function} callback
 */
function add(subscription, callback) {
	// settings
	const settings = {
		schema: _schema,
		arn: subscription.SubscriptionArn,
		topic: subscription.TopicArn,
		protocol: subscription.Protocol,
		endpoint: subscription.Endpoint,
	};
	// optional username
	if (subscription.CustomUserData) {
		settings.username = subscription.CustomUserData;
	}
	// get the app, if it's in oure store
	return core.add(settings, callback);
}

/**
 * Add many to store.
 *
 * @method addMany
 * @param {array} contents 					Data to store.
 * @param {function} callback				A callback function.
 * @param {string} username					Optional username.
 * @return {function} core.addMany			The shared setter.
 */
function addMany(contents, callback, username) {
	// settings
	const settings = {
		schema: _schema,
		map: {
			arn: "SubscriptionArn",
			topic: "TopicArn",
			protocol: "Protocol",
			endpoint: "Endpoint",
		},
	};
	// optional username
	if (username) {
		settings.username = username;
	}
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

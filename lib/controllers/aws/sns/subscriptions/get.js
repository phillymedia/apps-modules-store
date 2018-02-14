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
 * @param {function} callback - A callback.
 * @returns {function}
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
 * @param {string} arn - The ARN to search for.
 * @param {function} callback - A callback.
 * @returns {function}
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
 * @param {string} arn - The ARN to search for.
 * @param {function} callback - A callback.
 * @returns {function}
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
 * @param {string} username - The username to search for.
 * @param {function} callback - A callback.
 * @returns {function}
 */
function byUsername(username, callback) {
  // settings
  const settings = {
    schema: _schema,
    param: username,
    field: "username",
  };
  // get the sub, if it's in our store
  return core.findByParam(settings, callback);
}


// EXPORTS
// =============================================================================

export {
  all,
  byEndpoint,
  byTopicArn,
  byUsername,
};

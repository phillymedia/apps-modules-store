// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isArray } from "lodash";
// APP -------------------------------
import { db } from "COMP/db";
// sub-modules
import core from "COMP/aws/core";
// model
const _schema = db.model("Endpoint");


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of endpoints.
 *
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
 * Get endpoint from ARN.
 *
 * @param {string} arn
 * @param {function} callback
 */
function byArn(arn, callback) {
  // settings
  const settings = {
    schema: _schema,
    arn,
  };
  // get the app, if it's in oure store
  return core.findByArn(settings, callback);
}

/**
 * Get endpoint from token.
 *
 * @param {string} appHint
 * @param {function} callback
 */
function byToken(token, callback) {
  // settings
  const settings = {
    schema: _schema,
    attr: token,
    field: "Token",
  };
  // get the app, if it's in our store
  return core.findByAttribute(settings, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // return a single result as an object
    if (isArray(data) && data.length === 1) {
      [data] = data;
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Get endpoint from username.
 *
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
  // get the app, if it's in oure store
  return core.findByAttribute(settings, callback);
}


// EXPORTS
// =============================================================================

export {
  all,
  byArn,
  byToken,
  byUsername,
};

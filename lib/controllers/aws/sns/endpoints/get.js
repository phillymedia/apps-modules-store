// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isEmpty } from "lodash";
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
 * Get endpoint from ARN.
 *
 * @method byArn
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
  return core.findByArn(settings, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    if (!isEmpty(data)) {
      [data] = data;
    }
    // pass back
    return callback(null, data);
  });
}

/**
 * Get endpoint from token.
 *
 * @method byToken
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
    // otherwise...
    if (!isEmpty(data)) {
      [data] = data;
    }
    // pass back
    return callback(null, data);
  });
}

/**
 * Get endpoint from username.
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

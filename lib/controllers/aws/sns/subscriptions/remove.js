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
 * Remove all from store.
 *
 * @return {function} core.remove
 */
function all(callback) {
  // settings
  const settings = {
    schema: _schema,
  };
  return core.remove(settings, callback);
}

/**
 * Remove from store - by ARN.
 *
 * @param {string} arn - Arn to remove.
 * @return {function} core.remove
 */
function byArn(arn, callback) {
  // settings
  const settings = {
    schema: _schema,
    arn,
  };
  return core.remove(settings, callback);
}


// EXPORT
// =============================================================================

export {
  all,
  byArn,
};

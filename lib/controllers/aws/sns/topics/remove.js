// DEPENDENCIES
// =============================================================================
// APP -------------------------------
import { db } from "COMP/db";
// sub-modules
import core from "COMP/aws/core";
// model
const _schema = db.model("Topic");


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Remove all from store.
 *
 * @param {function} callback - A callback.
 * @returns {function}
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
 * @param {string} arn - The ARN to remove.
 * @param {function} callback - A callback.
 * @returns {function}
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

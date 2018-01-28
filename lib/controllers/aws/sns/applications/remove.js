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
 * Remove all from store.
 *
 * @method all
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
 * @method byArn
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

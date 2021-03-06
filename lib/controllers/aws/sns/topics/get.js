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
 * Get a list of topics.
 *
 * @param {function} callback - A callback.
 * @returns {function}
 */
function all(callback) {
  // schema
  const settings = {
    schema: _schema,
  };
  // get the topic, if it's in oure store
  return core.findAll(settings, callback);
}

/**
 * Get topic from hint.
 *
 * @param {string} topicHint - The topic hint to search for.
 * @param {function} callback - A callback.
 * @returns {function}
 */
function byHint(topicHint, callback) {
  // settings
  const settings = {
    schema: _schema,
    hint: topicHint,
    field: "arn",
  };
  // get the topic, if it's in oure store
  return core.findByHint(settings, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export {
  all,
  byHint,
};

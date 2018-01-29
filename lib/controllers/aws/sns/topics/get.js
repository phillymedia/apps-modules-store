// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isEmpty } from "lodash";
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
 * @method all
 * @param {function} callback
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
 * @method byHint
 * @param {string} topicHint
 * @param {function} callback
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
    // otherwise...
    if (!isEmpty(data)) {
      [data] = data;
    }
    // pass back
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export {
  all,
  byHint,
};

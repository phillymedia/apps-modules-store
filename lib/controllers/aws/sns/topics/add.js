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
 * Add to store.
 *
 * @param {object} topic
 * @param {function} callback
 */
function add(topic, callback) {
  // settings
  const settings = {
    schema: _schema,
    arn: topic.TopicArn,
    attributes: topic.Attributes,
  };
  // add the topic
  return core.add(settings, callback);
}

/**
 * Add many to store.
 *
 * @param {array} contents - Data to store.
 * @param {function} callback - A callback function.
 * @return {function}
 */
function addMany(contents, callback) {
  // settings
  const settings = {
    schema: _schema,
    map: {
      arn: "TopicArn",
      attributes: "Attributes",
    },
  };
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

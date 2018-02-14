// DEPENDENCIES
// =============================================================================
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
 * Add to store.
 *
 * @param {object} endpoint
 * @param {function} callback
 */
function add(endpoint, callback) {
  // settings
  const settings = {
    schema: _schema,
    arn: endpoint.EndpointArn,
    attributes: endpoint.Attributes,
  };
  // get the app, if it's in oure store
  return core.add(settings, callback);
}

/**
 * Add many to store.
 *
 * @param {array} contents - Data to store.
 * @param {function} callback - A callback function.
 * @returns {function} core.addMany - The shared setter.
 */
function addMany(contents, callback) {
  // settings
  const settings = {
    schema: _schema,
    map: {
      arn: "EndpointArn",
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

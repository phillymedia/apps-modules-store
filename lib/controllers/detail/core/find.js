// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isArray, isEmpty, map } from "lodash";
// APP -------------------------------
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get items.
 *
 * @param {object} settings
 * @param {function} callback
 * @returns {function}
 */
function findMany(settings, callback) {
  // only use findMany for arrays!
  if (!isArray(settings.id)) {
    return findOne(settings, callback);
  }
  // set up parameters
  const params = {
    id: {
      $in: settings.id,
    },
  };
  // find a document!
  return core.find(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // if data...
    if (isEmpty(data)) {
      // otherwise...
      return callback(null, false);
    }
    // otherwise...
    return callback(null, map(data, datum => (datum.content)));
  });
}

/**
 * Get item.
 *
 * @param {object} settings - Request settings.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error object on failure, null on success.
 */
function findOne(settings, callback) {
  // don't use findOne on arrays!
  if (isArray(settings.id)) {
    return findMany(settings, callback);
  }
  // set up parameters
  const params = {
    id: settings.id,
  };
  // find a document!
  return core.findOne(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // if data...
    if (data && data.content) {
      // otherwise...
      return callback(null, data.content);
    }
    // otherwise...
    return callback(null, false);
  });
}

/**
 * Does an item already exist?
 *
 * @param {object} settings - Request settings.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error object on failure, null on success.
 */
function exists(settings, callback) {
  // set up parameters
  const params = {
    id: settings.id,
  };
  // search
  core.exists(_schema, params, callback);
}


// EXPORTS
// =============================================================================

export {
  findMany,
  findOne,
  exists,
};

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isArray, forEach, unset, map as _map } from "lodash";
import { map } from "async";
// APP -------------------------------
// config
import { database as _database } from "APP/config";
// sub-modules
import core from "COMP/core";
import { findByArn } from "./find";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function add(settings, callback) {
  // pop off schema
  const { schema } = settings;
  // remove skip from params
  unset(settings, ["schema"]);
  // insert document
  core.add(schema, settings, (err, data) => {
    // handle errors
    if (err) {
      // duplicate entry -- fall through!
      if (err.code === _database.errors.duplicate) {
        // set schema
        settings.schema = schema;
        // find by hint/arn
        return findByArn(settings, callback);
      }
      // otherwise, pass error back
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
 * Insert a new item.
 *
 * @param {object} settings - Settings.
 * @param {array} documents - Array of documents to format and insert.
 * @param {function} callback - A callback function.
 * @returns {function} - Returns error object on failure, null on success.
 */
function addMany(settings, documents, callback) {
  // the database should be empty at this point...
  const { schema } = settings;
  // peel off and add each ID
  map(
    documents, (document, next) => {
    // settings
      const params = {};
      // use settings map
      if (settings.map) {
        forEach(settings.map, (value, key) => {
        // arn: document.PlatformApplicationArn
          params[key] = document[value];
        });
      }
      // optional username
      if (settings.username) {
        params.username = settings.username;
      }
      // add to array
      return next(null, params);
    },
    // done!
    (mapErr, mapped) => {
      // handle errors
      if (mapErr) {
        return callback(mapErr);
      }
      // otherwise...
      return core.addMany(settings.schema, mapped, (err, data) => {
        // handle errors
        if (err) {
          // duplicate entry -- fall through!
          if (err.code === _database.errors.duplicate
          && data) {
            // get the arns
            const arns = _map(data, dupError => (dupError.arn));
            // find by arn
            // set settings
            settings = {
              schema,
              arn: arns,
            };
            // send a single item instead of many
            if (settings.arn.length === 1) {
              [settings.arn] = arns;
            }
            // make the findByArn call
            return findByArn(settings, callback);
          }
          // otherwise, pass error back
          return callback(err);
        }
        // otherwise...
        return callback(null, data);
      });
    },
  );
}


// EXPORTS
// =============================================================================

export {
  add,
  addMany,
};

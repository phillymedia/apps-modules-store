// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { minutesFromNow } from "philly-helpers";
import { database as _database } from "APP/config";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";

// THIRD PARTY LIBRARIES -------------------------------
// lodash
import { isEmpty } from "lodash";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get item(s).
 *
 * @param {object} req - Original request.
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function find(settings, callback) {
  // set up parameters
  const params = {
    source: settings.source,
    type: settings.type,
    name: settings.name,
    version: settings.version,
    limit: 1,
  };
  // find a document!
  core.find(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // mongoose always returns an array, but there should only be one item
    // so, peel off content
    if (!isEmpty(data)) {
      data = data[0].content;
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Insert a new item.
 *
 * @param {object} settings - Settings from the original request.
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function add(settings, callback) {
  // set up parameters
  const params = {
    expireAt: minutesFromNow(settings.delay),
    source: settings.source,
    type: settings.type,
    name: settings.name,
    content: settings.content,
    version: settings.version // TODO: Version instead???
  };

  // insert document
  core.add(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      console.error(err);
      // duplicate entry -- fall through!
      if (err.code === _database.errors.duplicate) {
        // re-set schema
        settings.schema = _schema;
        // find by id
        return find(settings, callback);
      }
      // otherwise, pass error back
      return callback(err);
    }
    // otherwise...
    return callback(null, data.content);
  });
}


/**
 * Insert a new item.
 *
 * @param {string} source - Source, e.g. "philly_app".
 * @param {string} type - Type, e.g. "articles".
 * @param {string} name - Section name, e.g. "sports".
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function remove({ source, type, name }, callback) {
  // set up parameters
  const params = {
    source,
    type,
    name,
  };
  // insert document
  core.remove(_schema, params, callback);
}

/**
 * Does an item already exist?
 *
 * @param {string} source - Source, e.g. "philly_app".
 * @param {string} type - Type, e.g. "articles".
 * @param {string} name - Section name, e.g. "sports".
 * @returns {object} - Returns error object on failure, null on success.
 */
function exists({ source, type, name }, callback) {
  // set up parameters
  const params = {
    source,
    type,
    name,
  };
  // search
  core.exists(_schema, params, callback);
}


// EXPORTS
// =============================================================================

export default {
  find,
  // findById,
  add,
  remove,
  exists,
};

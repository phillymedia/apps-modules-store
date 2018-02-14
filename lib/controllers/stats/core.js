// DEPENDENCIES
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// lodash
import { isEmpty } from "lodash";

// APP -------------------------------
// helpers
import { minutesFromNow } from "philly-helpers";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get item(s).
 *
 * @param {string} name - The name of the item to store.
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function find({ name }, callback) {
  // set up parameters
  const params = {
    name,
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
 * @param {number} delay - The delay, in minutes.
 * @param {string} name - The name of the item to store.
 * @param {object} content - The content to store.
 * @param {function} callback - Returns error or result
 * @returns {function}
 */
function add({ delay, name, content }, callback) {
  // set up parameters
  const params = {
    expireAt: minutesFromNow(delay),
    name,
    content,
  };
  // insert document
  core.add(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return callback(null, data.content);
  });
}

/**
 * Does an item already exist?
 *
 * @param {string} name - The name of the item to store.
 * @param {function} callback - A callback function.
 * @returns {object} - Returns error object on failure, null on success.
 */
function exists({ name }, callback) {
  // set up parameters
  const params = {
    name,
  };
  // search
  core.exists(_schema, params, callback);
}

/**
 * Clear out items.
 *
 * @param {string} name - The name of the item to remove.
 * @param {function} callback - Callback.
 */
function remove({ name }, callback) {
  // set up parameters
  const params = {
    name,
  };
  // remove
  core.remove(_schema, params, callback);
}


// EXPORTS
// =============================================================================

export default {
  find,
  add,
  remove,
  exists,
};

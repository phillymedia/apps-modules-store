// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { minutesFromNow } from "philly-helpers";
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
* @method find
* @param {Object} req - Original request.
* @param {Function} callback - Returns error or result
* @return {Function}
*/
function find(settings, callback) {
  console.log("FEED FIND:", settings);
  // set up parameters
  const params = {
    source: settings.source,
    type: settings.type,
    name: settings.name,
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
* @method add
* @param {Object} req - Original request.
* @param {Function} callback - Returns error or result
* @return {Function}
*/
function add(settings, callback) {
  // set up parameters
  const params = {
    expireAt: minutesFromNow(settings.delay),
    source: settings.source,
    type: settings.type,
    name: settings.name,
    content: settings.content,
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
* Insert a new item.
*
* @method remove
* @param {Object} req - Original request.
* @param {Function} callback - Returns error or result
* @return {Function}
*/
function remove(settings, callback) {
  // set up parameters
  const params = {
    source: settings.source,
    type: settings.type,
    name: settings.name,
  };
  // insert document
  core.remove(_schema, params, callback);
}

/**
* Does an item already exist?
*
* @method exists
* @param {Object} settings - Request settings.
* @param {Function} callback - A callback function.
* @return {Object} - Returns error object on failure, null on success.
*/
function exists(settings, callback) {
  // set up parameters
  const params = {
    source: settings.source,
    type: settings.type,
    name: settings.name,
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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phillyHelpers = require("philly-helpers");

var _config = require("../../config");

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// model
function find(settings, callback) {
  // set up parameters
  var params = {
    source: settings.source,
    type: settings.type,
    name: settings.name,
    limit: 1
  };
  // find a document!
  _core2.default.find(_schema3.default, params, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // mongoose always returns an array, but there should only be one item
    // so, peel off content
    if (!(0, _lodash.isEmpty)(data)) {
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


// THIRD PARTY LIBRARIES -------------------------------
// lodash

// sub-modules
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
function add(settings, callback) {
  // set up parameters
  var params = {
    expireAt: (0, _phillyHelpers.minutesFromNow)(settings.delay),
    source: settings.source,
    type: settings.type,
    name: settings.name,
    content: settings.content
  };
  // insert document
  _core2.default.add(_schema3.default, params, function (err, data) {
    // handle errors
    if (err) {
      // duplicate entry -- fall through!
      if (err.code === _config.database.errors.duplicate) {
        // re-set schema
        settings.schema = _schema3.default;
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
* @method remove
* @param {Object} req - Original request.
* @param {Function} callback - Returns error or result
* @return {Function}
*/
function remove(settings, callback) {
  // set up parameters
  var params = {
    source: settings.source,
    type: settings.type,
    name: settings.name
  };
  // insert document
  _core2.default.remove(_schema3.default, params, callback);
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
  var params = {
    source: settings.source,
    type: settings.type,
    name: settings.name
  };
  // search
  _core2.default.exists(_schema3.default, params, callback);
}

// EXPORTS
// =============================================================================

exports.default = {
  find: find,
  // findById,
  add: add,
  remove: remove,
  exists: exists
};
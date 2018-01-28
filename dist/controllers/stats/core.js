"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require("lodash");

var _phillyHelpers = require("philly-helpers");

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

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

// sub-modules
// DEPENDENCIES
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// lodash
function find(settings, callback) {
  // set up parameters
  var params = {
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

// model


// APP -------------------------------
// helpers
function add(settings, callback) {
  // set up parameters
  var params = {
    expireAt: (0, _phillyHelpers.minutesFromNow)(settings.delay),
    name: settings.name,
    content: settings.content
  };
  // insert document
  _core2.default.add(_schema3.default, params, function (err, data) {
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
* @method exists
* @param {Object} settings - Request settings.
* @param {Function} callback - A callback function.
* @return {Object} - Returns error object on failure, null on success.
*/
function exists(settings, callback) {
  // set up parameters
  var params = {
    name: settings.name
  };
  // search
  _core2.default.exists(_schema3.default, params, callback);
}

/**
 * Clear out items.
 *
 * @param {string} name - The name of the item to remove.
 * @param {function} callback - Callback.
 */
function remove(_ref, callback) {
  var name = _ref.name;

  // set up parameters
  var params = {
    name: name
  };
  // remove
  _core2.default.remove(_schema3.default, params, callback);
}

// EXPORTS
// =============================================================================

exports.default = {
  find: find,
  add: add,
  remove: remove,
  exists: exists
};
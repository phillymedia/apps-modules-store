"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByParam = exports.findByHint = exports.findByAttribute = exports.findByArn = exports.findAll = exports.exists = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _lodash = require("lodash");

var _phillyHelpers = require("philly-helpers");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------

// APP -------------------------------
// logging

// sub-modules


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Does an item already exist?
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function exists(settings, callback) {
  // set up parameters
  var params = {
    arn: settings.arn
  };
  // search
  _core2.default.exists(settings.schema, params, callback);
}

/**
 * Get all item(s).
 *
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findAll(settings, callback) {
  // find a document!
  _core2.default.find(settings.schema, {}, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Get an item by hint.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByHint(settings, callback) {
  // turn the hint into a regular expression
  var hintEx = new RegExp(settings.hint, "gi");
  // find the item
  _core2.default.find(settings.schema, _defineProperty({}, settings.field, hintEx), function (err, data) {
    if (err) {
      return callback(err);
    }
    // otherwise...
    _phillyHelpers.log.debug("Finding by hint...", data);
    // return a single result as an object
    if ((0, _lodash.isArray)(data) && data.length === 1) {
      var _data = data;

      var _data2 = _slicedToArray(_data, 1);

      data = _data2[0];
    }
    // continue
    return callback(null, data);
  });
}

/**
 * Get an item by arn.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByArn(settings, callback) {
  // find the item
  _core2.default.find(settings.schema, { arn: settings.arn }, function (err, data) {
    if (err) {
      return callback(err);
    }
    // otherwise...
    _phillyHelpers.log.debug("Finding by hint...", data);
    // return a single result as an object
    if ((0, _lodash.isArray)(data) && data.length === 1) {
      var _data3 = data;

      var _data4 = _slicedToArray(_data3, 1);

      data = _data4[0];
    }
    // continue
    return callback(null, data);
  });
}

/**
 * Get item by top-level parameter.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByParam(settings, callback) {
  // find the item
  _core2.default.find(settings.schema, _defineProperty({}, settings.field, settings.param), function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Get an item by nested attribute.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByAttribute(settings, callback) {
  var attr = "attributes." + settings.field;
  // find the item
  _core2.default.find(settings.schema, _defineProperty({}, attr, settings.attr), function (err, data) {
    if (err) {
      return callback(err);
    }
    // otherwise...
    _phillyHelpers.log.debug("Finding by hint...", data);
    // continue
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

exports.exists = exists;
exports.findAll = findAll;
exports.findByArn = findByArn;
exports.findByAttribute = findByAttribute;
exports.findByHint = findByHint;
exports.findByParam = findByParam;
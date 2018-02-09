"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMany = exports.add = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------

// APP -------------------------------
// config

// sub-modules


var _lodash = require("lodash");

var _async = require("async");

var _config = require("../../../config");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _find = require("./find");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method add
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function add(settings, callback) {
  // pop off schema
  var schema = settings.schema;
  // remove skip from params

  (0, _lodash.unset)(settings, ["schema"]);
  // insert document
  _core2.default.add(schema, settings, function (err, data) {
    // handle errors
    if (err) {
      // duplicate entry -- fall through!
      if (err.code === _config.database.errors.duplicate) {
        // set schema
        settings.schema = schema;
        // find by hint/arn
        return (0, _find.findByArn)(settings, callback);
      }
      // otherwise, pass error back
      return callback(err);
    }
    // return a single result as an object
    if ((0, _lodash.isArray)(data) && data.length === 1) {
      var _data = data;

      var _data2 = _slicedToArray(_data, 1);

      data = _data2[0];
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Insert a new item.
 *
 * @method addMany
 * @param {object} settings - Settings.
 * @param {array} documents - Array of documents to format and insert.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function addMany(settings, documents, callback) {
  // the database should be empty at this point...
  var _settings = settings,
      schema = _settings.schema;
  // peel off and add each ID

  (0, _async.map)(documents, function (document, next) {
    // settings
    var params = {};
    // use settings map
    if (settings.map) {
      (0, _lodash.forEach)(settings.map, function (value, key) {
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
  function (mapErr, mapped) {
    // handle errors
    if (mapErr) {
      return callback(mapErr);
    }
    // otherwise...
    return _core2.default.addMany(settings.schema, mapped, function (err, data) {
      // handle errors
      if (err) {
        // duplicate entry -- fall through!
        if (err.code === _config.database.errors.duplicate && data) {
          // get the arns
          var arns = (0, _lodash.map)(data, function (dupError) {
            return dupError.arn;
          });
          // find by arn
          // set settings
          settings = {
            schema: schema,
            arn: arns
          };
          // send a single item instead of many
          if (settings.arn.length === 1) {
            var _arns = _slicedToArray(arns, 1);

            settings.arn = _arns[0];
          }
          // make the findByArn call
          return (0, _find.findByArn)(settings, callback);
        }
        // otherwise, pass error back
        return callback(err);
      }
      // otherwise...
      return callback(null, data);
    });
  });
}

// EXPORTS
// =============================================================================

exports.add = add;
exports.addMany = addMany;
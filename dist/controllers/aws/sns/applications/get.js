"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byHint = exports.all = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------

// APP -------------------------------

// sub-modules


var _lodash = require("lodash");

var _db = require("../../../db");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// model
var _schema = _db.db.model("Application");

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get a list of applications.
 *
 * @method all
 * @param {function} callback
 */
function all(callback) {
  // schema
  var settings = {
    schema: _schema
  };
  // get the app, if it's in oure store
  return _core2.default.findAll(settings, callback);
}

/**
 * Get app from hint.
 *
 * @method byHint
 * @param {string} appHint
 * @param {function} callback
 */
function byHint(appHint, callback) {
  // settings
  var settings = {
    schema: _schema,
    hint: appHint,
    field: "arn"
  };
  // get the app, if it's in oure store
  return _core2.default.findByHint(settings, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    if (!(0, _lodash.isEmpty)(data)) {
      var _data = data;

      var _data2 = _slicedToArray(_data, 1);

      data = _data2[0];
    }
    // pass back
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

exports.all = all;
exports.byHint = byHint;
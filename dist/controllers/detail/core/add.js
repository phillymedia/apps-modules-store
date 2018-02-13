"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMany = exports.add = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------

// APP -------------------------------
// helpers

// config

// sub-modules

// model

// siblings


var _lodash = require("lodash");

var _async = require("async");

var _phillyHelpers = require("philly-helpers");

var _config = require("../../../config");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

var _find = require("./find");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================
var _store = _config.store.detail;
var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @param {object} settings - Request settings.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function add(settings, callback) {
  // set up parameters
  var params = {
    expireAt: (0, _phillyHelpers.minutesFromNow)(_delay),
    id: settings.id,
    content: settings.content
  };
  // insert document
  _core2.default.add(_schema3.default, params, function (err, data) {
    // handle errors
    if (err) {
      // duplicate entry -- fall through!
      if (err.code === _config.database.errors.duplicate) {
        // find by id
        return (0, _find.findOne)(settings, callback);
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
 * @param {array} contents - Array of documents to format and insert.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function addMany(documents, callback) {
  // peel off and add each ID
  (0, _async.map)(documents, function (document, next) {
    // settings
    var params = {
      expireAt: (0, _phillyHelpers.minutesFromNow)(_delay)
    };
    // peel off and add ID and content
    if (document.article) {
      params.id = document.article.item_id || document.article.guid;
      params.content = {
        article: document.article
      };
    }
    // same but from gallery
    else if (document.galleries) {
        params.id = document.galleries.item_id || document.galleries.guid;
        params.content = {
          galleries: document.galleries
        };
      } else {
        return next((0, _phillyHelpers.makeError)("BadContent", "Tried to add something other than an article or a gallery."));
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
    return _core2.default.addMany(_schema3.default, mapped, function (err, data) {
      // handle errors
      if (err) {
        // duplicate entry -- fall through!
        if (err.code === _config.database.errors.duplicate && data) {
          // get the ids
          var ids = (0, _lodash.map)(data, function (dupError) {
            return dupError.id;
          });
          // find by id
          // set settings
          var settings = {
            id: ids
          };
          // send a single item instead of many
          if (settings.id.length === 1) {
            var _ids = _slicedToArray(ids, 1);

            settings.id = _ids[0];
          }
          // make the findMany call
          return (0, _find.findMany)(settings, callback);
        }
        // otherwise, pass error back
        return callback(err);
      }
      // otherwise...
      // for arrays
      if ((0, _lodash.isArray)(data)) {
        return callback(null, (0, _lodash.map)(data, function (datum) {
          return datum.content;
        }));
      }
      // for singular items
      return callback(null, data.content);
    });
  });
}

// EXPORTS
// =============================================================================

exports.add = add;
exports.addMany = addMany;
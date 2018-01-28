"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMany = exports.add = undefined;

var _lodash = require("lodash");

var _async = require("async");

var _phillyHelpers = require("philly-helpers");

var _config = require("../../../config");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

// sub-modules

// APP -------------------------------
// helpers
// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
var _store = _config.store.detail;
// model

// config

var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method add
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
      return callback(err);
    }
    // otherwise...
    return callback(null, data.content);
  });
}

/**
 * Insert a new item.
 *
 * @method addMany
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
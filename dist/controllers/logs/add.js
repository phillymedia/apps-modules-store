"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item. Automatically delete the oldest at the same time.
 *
 * @param {object} settings - Settings for the request.
 * @param {function} callback - Returns error or result.
 * @return {function}
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules
function add(settings, callback) {
  // set up parameters
  var params = {
    date: settings.date || new Date(),
    target: settings.target,
    message: settings.message
  };
  // optional id
  if (settings.id) {
    params.id = settings.id;
  }
  // insert document
  _core2.default.add(_schema3.default, params, function (err, data) {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise
    return callback(null, data);
  });
}

// EXPORTS
// =============================================================================

// model
exports.default = add;
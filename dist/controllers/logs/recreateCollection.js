"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _config = require("../../config");

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

// config
var _store = _config.store.log;
// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// sub-modules

var _name = _store.collectionName;
var _max = _store.collectionMax;
var _size = _store.collectionSize;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Drop collection.
 *
 * @method recreateCollection
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function recreateCollection(callback) {
  // parameters
  var params = {
    capped: true,
    max: _max,
    size: _size
  };
  // remove
  _core2.default.recreateCollection(_name, _schema3.default, params, callback);
}

// EXPORTS
// =============================================================================

exports.default = recreateCollection;
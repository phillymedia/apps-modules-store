"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findAll = require("./findAll");

var _findAll2 = _interopRequireDefault(_findAll);

var _add = require("./add");

var _add2 = _interopRequireDefault(_add);

var _exists = require("./exists");

var _exists2 = _interopRequireDefault(_exists);

var _recreateCollection = require("./recreateCollection");

var _recreateCollection2 = _interopRequireDefault(_recreateCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORTS
// =============================================================================

// DEPENDENCIES
// =============================================================================

exports.default = {
  get: _findAll2.default,
  add: _add2.default,
  exists: _exists2.default,
  recreateCollection: _recreateCollection2.default
};
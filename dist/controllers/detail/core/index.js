"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require("./add");

var _find = require("./find");

var _recreateCollection = require("./recreateCollection");

var _recreateCollection2 = _interopRequireDefault(_recreateCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORTS
// =============================================================================

exports.default = {
  findOne: _find.findOne,
  findMany: _find.findMany,
  add: _add.add,
  addMany: _add.addMany,
  recreateCollection: _recreateCollection2.default,
  exists: _find.exists
}; // DEPENDENCIES
// =============================================================================
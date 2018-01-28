"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require("./set");

var _get = require("./get");

var _remove = require("./remove");

var _recreateCollection = require("./recreateCollection");

var _recreateCollection2 = _interopRequireDefault(_recreateCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORTS
// =============================================================================

exports.default = {
  add: _set.add,
  addMany: _set.addMany,
  createCollection: _set.createCollection,
  recreateCollection: _recreateCollection2.default,
  remove: _remove.remove,
  drop: _remove.drop,
  find: _get.find,
  findOne: _get.findOne,
  findById: _get.findById,
  exists: _get.exists,
  clearOld: _remove.clearOld
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = require("./get");

var _add = require("./add");

var _remove = require("./remove");

// EXPORTS
// =============================================================================

exports.default = {
  add: _add.add,
  addMany: _add.addMany,
  get: _get.all,
  getByEndpoint: _get.byEndpoint,
  getByTopicArn: _get.byTopicArn,
  getByUsername: _get.byUsername,
  remove: _remove.all,
  removeByArn: _remove.byArn
}; // DEPENDENCIES
// =============================================================================
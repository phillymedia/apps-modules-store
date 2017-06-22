"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = require("./get");

var _recreateCollection = require("./recreateCollection");

var _recreateCollection2 = _interopRequireDefault(_recreateCollection);

var _add = require("./add");

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

exports.default = {
	getDetail: _get.get,
	getDetails: _get.getMany,
	addDetail: _add2.default,
	recreateCollectionDetail: _recreateCollection2.default
}; // DEPENDENCIES
// =============================================================================
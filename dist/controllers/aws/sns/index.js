"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _applications = require("./applications");

var _applications2 = _interopRequireDefault(_applications);

var _endpoints = require("./endpoints");

var _endpoints2 = _interopRequireDefault(_endpoints);

var _subscriptions = require("./subscriptions");

var _subscriptions2 = _interopRequireDefault(_subscriptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	applications: _applications2.default,
	endpoints: _endpoints2.default,
	subscriptions: _subscriptions2.default
};
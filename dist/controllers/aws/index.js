"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ses = exports.sns = undefined;

var _ses = require("./ses");

var _ses2 = _interopRequireDefault(_ses);

var _sns = require("./sns");

var _sns2 = _interopRequireDefault(_sns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sns = _sns2.default;
exports.ses = _ses2.default;
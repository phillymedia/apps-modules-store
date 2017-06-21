"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _full = require("./articles/full");

var _full2 = _interopRequireDefault(_full);

var _brief = require("./articles/brief");

var _brief2 = _interopRequireDefault(_brief);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

// DEPENDENCIES
// =============================================================================

exports.default = {
	// full
	getArticles: _full2.default.get,
	setArticles: _full2.default.set,
	removeArticles: _full2.default.remove,
	// brief
	getArticlesBrief: _brief2.default.get,
	setArticlesBrief: _brief2.default.set,
	removeArticlesBrief: _brief2.default.remove
};
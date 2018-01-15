"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _full = require("./articles/full");

var _full2 = _interopRequireDefault(_full);

var _brief = require("./articles/brief");

var _brief2 = _interopRequireDefault(_brief);

var _search = require("./search");

var _search2 = _interopRequireDefault(_search);

var _sections = require("./sections");

var _sections2 = _interopRequireDefault(_sections);

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
	removeArticlesBrief: _brief2.default.remove,
	// search
	getSearch: _search2.default.get,
	setSearch: _search2.default.set,
	removeSearch: _search2.default.remove,
	// sections
	getSections: _sections2.default.get,
	setSections: _sections2.default.set,
	removeSections: _sections2.default.remove
};
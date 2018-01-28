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

var _full3 = require("./articles/legacy/v1/full");

var _full4 = _interopRequireDefault(_full3);

var _brief3 = require("./articles/legacy/v1/brief");

var _brief4 = _interopRequireDefault(_brief3);

var _v = require("./search/legacy/v1");

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

exports.default = {
  // full
  getArticles: _full2.default.get,
  getArticlesV1: _full4.default.get,
  setArticles: _full2.default.set,
  setArticlesV1: _full4.default.set,
  removeArticles: _full2.default.remove,
  removeArticlesV1: _full4.default.remove,
  // brief
  getArticlesBrief: _brief2.default.get,
  getArticlesBriefV1: _brief4.default.get,
  setArticlesBrief: _brief2.default.set,
  setArticlesBriefV1: _brief4.default.set,
  removeArticlesBrief: _brief2.default.remove,
  removeArticlesBriefV1: _brief4.default.remove,
  // search
  getSearch: _search2.default.get,
  getSearchV1: _v2.default.get,
  setSearch: _search2.default.set,
  setSearchV1: _v2.default.set,
  removeSearch: _search2.default.remove,
  removeSearchV1: _v2.default.remove,
  // sections
  getSections: _sections2.default.get,
  setSections: _sections2.default.set,
  removeSections: _sections2.default.remove
}; // DEPENDENCIES
// =============================================================================
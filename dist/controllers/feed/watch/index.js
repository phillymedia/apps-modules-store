"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _articles = require("./philly/articles");

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPORT
// =============================================================================

exports.default = {
	// philly
	getArticlesPhilly: _articles2.default.get,
	setArticlesPhilly: _articles2.default.set,
	removeArticlesPhilly: _articles2.default.remove
}; // DEPENDENCIES
// =============================================================================
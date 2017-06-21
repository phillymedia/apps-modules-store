"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Add to store.
 *
 * @method add
 * @param {object} content 					Data to store.
 * @param {function} callback				A callback function.
 * @return {function} core._add				The shared setter.
 */
function add(content, callback) {
	// settings
	var settings = {
		content: content
	};
	// peel off and add ID
	if (content.article) {
		settings.id = content.article.item_id || content.article.guid;
	}
	// add
	return _core2.default.add(settings, callback);
}

// EXPORT
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
exports.default = add;
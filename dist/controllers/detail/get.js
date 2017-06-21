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
 * Get store.
 *
 * @method get
 * @return {Function} core.find				The shared getter.
 */
function get(id, callback) {
	// settings
	var settings = {
		id: id
	};
	// find
	return _core2.default.findOne(settings, callback);
}

// EXPORT
// =============================================================================

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
exports.default = get;
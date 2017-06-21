"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _phillyHelpers = require("philly-helpers");

var _config = require("../../../config");

var _core = require("../../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PROPERTIES
// =============================================================================

// sub-modules
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
var _store = _config.store.detail;
// model

// config

var _delay = _store.expiresInMinutes;

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method add
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */
function add(settings, callback) {
	// set up parameters
	var params = {
		expireAt: (0, _phillyHelpers.minutesFromNow)(_delay),
		id: settings.id,
		content: settings.content
	};
	// insert document
	_core2.default.add(_schema3.default, params, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		return callback(null, data.content);
	});
}

// EXPORTS
// =============================================================================

exports.default = add;
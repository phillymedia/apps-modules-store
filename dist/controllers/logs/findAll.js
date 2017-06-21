"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _logging = require("../logging");

var _logging2 = _interopRequireDefault(_logging);

var _core = require("../core");

var _core2 = _interopRequireDefault(_core);

var _schema2 = require("./schema");

var _schema3 = _interopRequireDefault(_schema2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Get recent item(s).
 *
 * @method findAll
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {Function}
 */

// sub-modules
function findAll(settings, callback) {
	// set up parameters
	var params = {
		// get the most recent X log entries
		limit: settings.limit,
		// reverse chronological
		sort: {
			date: "desc"
		}
	};
	// find a document!
	_core2.default.find(_schema3.default, params, function (err, data) {
		if (err) {
			return callback(err);
		}
		// otherwise...
		_logging2.default.debug("Finding all logs...", data);
		// continue
		return callback(null, data);
	});
}

// EXPORTS
// =============================================================================

// model
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// logging
exports.default = findAll;
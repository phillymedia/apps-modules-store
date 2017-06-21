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
 * Get an item by its ID.
 *
 * @method findById
 * @param {Object} settings			Settings for the request.
 * @param {Function} callback		Returns error or result.
 * @return {function}
**/

// sub-modules
function findById(settings, callback) {
	// find the item
	_core2.default.findById(_schema3.default, settings.id, function (err, data) {
		if (err) {
			return callback(err);
		}
		// otherwise...
		_logging2.default.debug("Finding log...", data);
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
exports.default = findById;
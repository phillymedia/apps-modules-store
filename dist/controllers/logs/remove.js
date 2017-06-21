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
 * Drop the collection.
 *
 * @method drop
 * @param {Function} callback		Returns error or result.
 * @return {Function}
*/

// sub-modules
function drop(callback) {
	// remove
	_core2.default.drop(_schema3.default, function (err, data) {
		// handle errors
		if (err) {
			return callback(err);
		}
		// otherwise...
		_logging2.default.debug("Removing log...", data);
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
exports.default = drop;
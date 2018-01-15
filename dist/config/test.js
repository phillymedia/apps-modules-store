"use strict";

var _development = require("./development");

var _development2 = _interopRequireDefault(_development);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TEST
// =============================================================================
// change settings for test
// SETTINGS -------------------------------
_development2.default.env = "test";

// DB -------------------------------
// put it all together...
// import DEV version of global settings
_development2.default.database.logs.limit = 10;

// EXPORT
// =============================================================================
module.exports = _development2.default;
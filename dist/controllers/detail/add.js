"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMany = exports.add = undefined;

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Add to store.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @return {function} core._add - The shared setter.
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
  // same but from gallery
  else if (content.galleries) {
      settings.id = content.galleries.item_id || content.galleries.guid;
    }
  // add
  return _core2.default.add(settings, callback);
}

/**
 * Add to store.
 *
 * @param {array} contents - Data to store.
 * @param {function} callback - A callback function.
 * @return {function} core._add - The shared setter.
 */
// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
function addMany(contents, callback) {
  // we have to do an async map on the other side,
  // so let's not also do it here -- pulling ID from
  // content at the same time as everything else
  return _core2.default.addMany(contents, callback);
}

// EXPORT
// =============================================================================

exports.add = add;
exports.addMany = addMany;
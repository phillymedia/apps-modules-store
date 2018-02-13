// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// main core
import core from "COMP/detail/core";


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
  const settings = {
    content,
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
  return core.add(settings, callback);
}

/**
 * Add to store.
 *
 * @param {array} contents - Data to store.
 * @param {function} callback - A callback function.
 * @return {function} core._add - The shared setter.
 */
function addMany(contents, callback) {
  // we have to do an async map on the other side,
  // so let's not also do it here -- pulling ID from
  // content at the same time as everything else
  return core.addMany(contents, callback);
}

// EXPORT
// =============================================================================

export {
  add,
  addMany,
};

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.main;
const _source = `${_store.source}brief`;
const _type = _store.type.articles;
const _delay = _store.expiresInMinutes;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store - brief.
 *
 * @param {string} name - Name of the store.
 * @param {object} content - Data to store.
 * @param {function} callback - A callback function.
 * @returns {function} core._add - The shared setter.
 */
function setArticles(name, content, callback) {
  const settings = {
    source: _source,
    type: _type,
    delay: _delay,
    name,
    content,
  };
  return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default setArticles;

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.mainLegacy.v1;
const _source = `${_store.source}brief`;
const _name = _store.name;
const _type = _store.type.articles;
const _delay = _store.expiresInMinutes.articles;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Set store - brief - v1.
 *
 * @param {object} content - Data to store.
 * @param {function} callback - A callback.
 * @returns {function}
 */
function setArticles(content, callback) {
  const settings = {
    source: _source,
    type: _type,
    delay: _delay,
    name: _name,
    content,
  };
  return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default setArticles;

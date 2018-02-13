// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { map as _map, isArray } from "lodash";
import { map } from "async";
// APP -------------------------------
// helpers
import { makeError, minutesFromNow } from "philly-helpers";
// config
import { store, database as _database } from "APP/config";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";
// siblings
import { findOne, findMany } from "./find";


// PROPERTIES
// =============================================================================
const _store = store.detail;
const _delay = _store.expiresInMinutes;


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @param {object} settings - Request settings.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function add(settings, callback) {
  // set up parameters
  const params = {
    expireAt: minutesFromNow(_delay),
    id: settings.id,
    content: settings.content,
  };
  // insert document
  core.add(_schema, params, (err, data) => {
    // handle errors
    if (err) {
      // duplicate entry -- fall through!
      if (err.code === _database.errors.duplicate) {
        // find by id
        return findOne(settings, callback);
      }
      // otherwise, pass error back
      return callback(err);
    }
    // otherwise...
    return callback(null, data.content);
  });
}


/**
 * Insert a new item.
 *
 * @param {array} contents - Array of documents to format and insert.
 * @param {function} callback - A callback function.
 * @return {function} - Returns error object on failure, null on success.
 */
function addMany(documents, callback) {
  // peel off and add each ID
  map(
    documents, (document, next) => {
    // settings
      const params = {
        expireAt: minutesFromNow(_delay),
      };
      // peel off and add ID and content
      if (document.article) {
        params.id = document.article.item_id || document.article.guid;
        params.content = {
          article: document.article,
        };
      }
      // same but from gallery
      else if (document.galleries) {
        params.id = document.galleries.item_id || document.galleries.guid;
        params.content = {
          galleries: document.galleries,
        };
      }
      else {
        return next(makeError("BadContent", "Tried to add something other than an article or a gallery."));
      }
      // add to array
      return next(null, params);
    },
    // done!
    (mapErr, mapped) => {
      // handle errors
      if (mapErr) {
        return callback(mapErr);
      }
      // otherwise...
      return core.addMany(_schema, mapped, (err, data) => {
        // handle errors
        if (err) {
          // duplicate entry -- fall through!
          if (err.code === _database.errors.duplicate
          && data) {
            // get the ids
            const ids = _map(data, dupError => (dupError.id));
            // find by id
            // set settings
            const settings = {
              id: ids,
            };
            // send a single item instead of many
            if (settings.id.length === 1) {
              [settings.id] = ids;
            }
            // make the findMany call
            return findMany(settings, callback);
          }
          // otherwise, pass error back
          return callback(err);
        }
        // otherwise...
        // for arrays
        if (isArray(data)) {
          return callback(null, _map(data, datum => (datum.content)));
        }
        // for singular items
        return callback(null, data.content);
      });
    },
  );
}


// EXPORTS
// =============================================================================

export {
  add,
  addMany,
};

// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { isArray } from "lodash";
// APP -------------------------------
// logging
import { log } from "philly-helpers";
// sub-modules
import core from "COMP/core";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Does an item already exist?
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function exists(settings, callback) {
  // set up parameters
  const params = {
    arn: settings.arn,
  };
  // search
  core.exists(settings.schema, params, callback);
}

/**
 * Get all item(s).
 *
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findAll(settings, callback) {
  // find a document!
  core.find(settings.schema, {}, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Get an item by hint.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByHint(settings, callback) {
  // turn the hint into a regular expression
  const hintEx = new RegExp(settings.hint, "gi");
  // find the item
  core.find(settings.schema, { [settings.field]: hintEx }, (err, data) => {
    if (err) {
      return callback(err);
    }
    // otherwise...
    log.debug("Finding by hint...", data);
    // return a single result as an object
    if (isArray(data) && data.length === 1) {
      [data] = data;
    }
    // continue
    return callback(null, data);
  });
}

/**
 * Get an item by arn.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByArn(settings, callback) {
  // find the item
  core.find(settings.schema, { arn: settings.arn }, (err, data) => {
    if (err) {
      return callback(err);
    }
    // otherwise...
    log.debug("Finding by hint...", data);
    // return a single result as an object
    if (isArray(data) && data.length === 1) {
      [data] = data;
    }
    // continue
    return callback(null, data);
  });
}

/**
 * Get item by top-level parameter.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByParam(settings, callback) {
  // find the item
  core.find(settings.schema, { [settings.field]: settings.param }, (err, data) => {
    // handle errors
    if (err) {
      return callback(err);
    }
    // otherwise...
    return callback(null, data);
  });
}

/**
 * Get an item by nested attribute.
 *
 * @param {object} settings - Settings.
 * @param {function} callback - Returns error or result
 * @return {function}
 */
function findByAttribute(settings, callback) {
  const attr = `attributes.${settings.field}`;
  // find the item
  core.find(settings.schema, { [attr]: settings.attr }, (err, data) => {
    if (err) {
      return callback(err);
    }
    // otherwise...
    log.debug("Finding by hint...", data);
    // continue
    return callback(null, data);
  });
}


// EXPORTS
// =============================================================================

export {
  exists,
  findAll,
  findByArn,
  findByAttribute,
  findByHint,
  findByParam,
};

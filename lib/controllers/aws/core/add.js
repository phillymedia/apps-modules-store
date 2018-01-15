// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { forEach, unset } from "lodash";
import { map } from "async";
// APP -------------------------------
// config
import { database as _database } from "APP/config";
// sub-modules
import core from "COMP/core";
import { findByHint } from "./find";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Insert a new item.
 *
 * @method add
 * @param {object} settings			Settings.
 * @param {function} callback		Returns error or result
 * @return {function}
 */
function add(settings, callback) {
	// pop off schema
	const { schema } = settings;
	// remove skip from params
	unset(settings, ["schema"]);
	// insert document
	core.add(schema, settings, (err, data) => {
		// handle errors
		if (err) {
			// duplicate entry -- fall through!
			if (err.code === _database.errors.duplicate) {
				// set arn to hint
				settings.hint = settings.arn;
				// find by hint/arn
				return findByHint(settings, callback);
			}
			// otherwise, pass error back
			return callback(err);
		}
		// otherwise...
		return callback(null, data);
	});
}

/**
 * Insert a new item.
 *
 * @method addMany
 * @param {object} settings				Settings.
 * @param {array} documents				Array of documents to format and insert.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
 */
function addMany(settings, documents, callback) {
	// the database should be empty at this point...
	// peel off and add each ID
	map(
		documents, (document, next) => {
		// settings
			const params = {};
			// use settings map
			if (settings.map) {
				forEach(settings.map, (value, key) => {
				// arn: document.PlatformApplicationArn
					params[key] = document[value];
				});
			}
			// optional username
			if (settings.username) {
				params.username = settings.username;
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
			return core.addMany(settings.schema, mapped, (err, data) => {
			// handle errors
				if (err) {
					return callback(err);
				}
				// otherwise...
				return callback(null, data);
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

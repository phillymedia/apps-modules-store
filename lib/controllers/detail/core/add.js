// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// helpers
import { minutesFromNow } from "philly-helpers";
// config
import { store } from "APP/config";
// sub-modules
import core from "COMP/core";
// model
import _schema from "./schema";


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
 * @method add
 * @param {object} settings				Request settings.
 * @param {function} callback			A callback function.
 * @return {function} 					Returns error object on failure, null on success.
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
			return callback(err);
		}
		// otherwise...
		return callback(null, data.content);
	});
}


// EXPORTS
// =============================================================================

export default add;

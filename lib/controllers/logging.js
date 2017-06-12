// DEPENDENCIES
// =============================================================================
import { debug as _debug } from "APP/config";

// METHODS
// =============================================================================

/**
 * A wrapper for console.info.
 *
 * @method info
 * @param {array} args
 */
function info(...args) {
	console.log(...Array.prototype.slice.call(args));
}

/**
 * A logger that only prints out in debug mode.
 *
 * @method debug
 * @param {array} args
 */
function debug(...args) {
	if (_debug) {
		console.log(...Array.prototype.slice.call(args));
	}
}

/**
 * A wrapper for console.log.
 *
 * @method log
 * @param {array} args
 */
function error(...args) {
	console.error(...Array.prototype.slice.call(args));
}

// EXPORTS
// =============================================================================
export default {
	info,
	debug,
	error,
};

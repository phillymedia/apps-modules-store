// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// config
import { store } from "APP/config";
// main core
import core from "COMP/feed/core";


// PROPERTIES
// =============================================================================
const _store = store.watch;
const _source = _store.source;
const _type = _store.type.articles;


// METHODS
// =============================================================================
// PUBLIC  -------------------------------

/**
* Get store.
*
* @method get
* @param {String} name 						Name of the store.
* @return {Function} core._find				The shared getter.
*/
function get(name, callback) {
	const settings = {
		source: _source,
		type: _type,
		name,
	};
	return core.find(settings, callback);
}


// EXPORTS
// =============================================================================

export default get;

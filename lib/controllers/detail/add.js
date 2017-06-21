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
 * @method add
 * @param {object} content 					Data to store.
 * @param {function} callback				A callback function.
 * @return {function} core._add				The shared setter.
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
	// add
	return core.add(settings, callback);
}


// EXPORT
// =============================================================================

export default add;

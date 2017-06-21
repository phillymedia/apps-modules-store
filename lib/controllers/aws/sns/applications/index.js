// DEPENDENCIES
// =============================================================================

import get from "./get";
import set from "./set";
import remove from "./remove";

// EXPORTS
// =============================================================================

export default {
	add: set.add,
	get: get.all,
	getByHint: get.byHint,
	remove: remove.all,
	removeByArn: remove.byArn,
};

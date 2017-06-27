// DEPENDENCIES
// =============================================================================

import get from "./get";
import { add, addMany } from "./add";
import remove from "./remove";

// EXPORTS
// =============================================================================

export default {
	add,
	addMany,
	get: get.all,
	getByHint: get.byHint,
	remove: remove.all,
	removeByArn: remove.byArn,
};

// DEPENDENCIES
// =============================================================================

import { all as get, byArn as getByArn, byToken as getByToken, byUsername as getByUsername } from "./get";
import { add, addMany } from "./add";
import { all as remove, byArn as removeByArn } from "./remove";

// EXPORTS
// =============================================================================

export default {
	add,
	addMany,
	get,
	getByArn,
	getByToken,
	getByUsername,
	remove,
	removeByArn,
};

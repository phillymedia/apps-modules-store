// DEPENDENCIES
// =============================================================================
import add from "./add";
import { exists, findOne, findMany } from "./find";
import recreateCollection from "./recreateCollection";

// EXPORTS
// =============================================================================

export default {
	findOne,
	findMany,
	add,
	recreateCollection,
	exists,
};

import { add, createCollection } from "./set";
import { exists, find, findOne, findById } from "./get";
import { clearOld, drop, remove } from "./remove";
import recreateCollection from "./recreateCollection";

// EXPORTS
// =============================================================================

export default {
	add,
	createCollection,
	recreateCollection,
	remove,
	drop,
	find,
	findOne,
	findById,
	exists,
	clearOld,
};

// DEPENDENCIES
// =============================================================================

import { get, getMany } from "./get";
import recreateCollection from "./recreateCollection";
import add from "./add";


// EXPORT
// =============================================================================

export default {
	getDetail: get,
	getDetails: getMany,
	addDetail: add,
	recreateCollectionDetail: recreateCollection,
};

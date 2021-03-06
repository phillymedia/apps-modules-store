// DEPENDENCIES
// =============================================================================

import { get, getMany } from "./get";
import recreateCollection from "./recreateCollection";
import { add, addMany } from "./add";


// EXPORT
// =============================================================================

export default {
  getDetail: get,
  getDetails: getMany,
  addDetail: add,
  addDetails: addMany,
  recreateCollectionDetail: recreateCollection,
};

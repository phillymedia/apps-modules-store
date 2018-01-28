// DEPENDENCIES
// =============================================================================
import { add, addMany } from "./add";
import { exists, findOne, findMany } from "./find";
import recreateCollection from "./recreateCollection";

// EXPORTS
// =============================================================================

export default {
  findOne,
  findMany,
  add,
  addMany,
  recreateCollection,
  exists,
};

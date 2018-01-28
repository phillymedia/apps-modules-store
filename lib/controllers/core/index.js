import { add, addMany, createCollection } from "./set";
import { exists, find, findOne, findById } from "./get";
import { clearOld, drop, remove } from "./remove";
import recreateCollection from "./recreateCollection";

// EXPORTS
// =============================================================================

export default {
  add,
  addMany,
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

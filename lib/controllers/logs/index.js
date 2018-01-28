// DEPENDENCIES
// =============================================================================

import findAll from "COMP/logs/findAll";
import add from "COMP/logs/add";
import exists from "COMP/logs/exists";
import recreateCollection from "COMP/logs/recreateCollection";


// EXPORTS
// =============================================================================

export default {
  get: findAll,
  add,
  exists,
  recreateCollection,
};

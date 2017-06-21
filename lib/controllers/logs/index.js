// DEPENDENCIES
// =============================================================================

import findAll from "COMP/logs/findAll";
import add from "COMP/logs/add";
import exists from "COMP/logs/exists";
import drop from "COMP/logs/remove";


// EXPORTS
// =============================================================================

export default {
	get: findAll,
	add,
	exists,
	drop,
};

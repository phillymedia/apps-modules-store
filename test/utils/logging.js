// DEPENDENCIES
// =============================================================================
// TESTED METHODS -------------------------------
import log from "COMP/logging";
import { stub } from "sinon";

// METHODS
// =============================================================================

function before() {
	// stub out console log
	stub(log, "info").callsFake(() => {});
	stub(log, "debug").callsFake(() => {});
}

function after() {
	// restore original value
	log.info.restore();
	log.debug.restore();
}


// EXPORTS
// =============================================================================

export {
	before,
	after,
};

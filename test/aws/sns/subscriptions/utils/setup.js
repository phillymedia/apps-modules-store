/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// OTHER -------------------------------
import log from "COMP/logging";
// TESTED METHOD -------------------------------
import subscriptions from "COMP/aws/sns/subscriptions";
const remove = subscriptions.remove;


// BEFORE AND AFTER
// =============================================================================

/**
 * After method.
 *
 * @method callAfter
 * @param {function} done
 * @return {function}
 */
function cleanup(done) {
	// delete test content inserted into the databases
	log.debug("Deleting test subscriptions content...");
	// remove fake platform
	remove((err) => {
		// handle errors
		if (err) {
			log.error(err);
		}
		// otherwise...
		log.debug("Successfully deleted.");
		// callback
		return done();
	});
}


// EXPORTS
// =============================================================================

export default {
	cleanup,
};
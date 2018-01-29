/* eslint-disable no-unused-expressions */

// DEPENDENCIES
// =============================================================================
// OTHER -------------------------------
import { log } from "philly-helpers";
// TESTED METHOD -------------------------------
import topics from "COMP/aws/sns/topics";
const { remove } = topics;


// BEFORE AND AFTER
// =============================================================================

/**
 * After method.
 *
 * @method cleanup
 * @param {function} done
 * @return {function}
 */
function cleanup(done) {
  // delete test content inserted into the databases
  log.debug("Deleting test topics content...");
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

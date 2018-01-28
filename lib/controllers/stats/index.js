// DEPENDENCIES
// =============================================================================
// THIRD PARTY LIBRARIES -------------------------------
// asyncronous functionality (async.each, etc) for performance
import { parallel } from "async";

// APP -------------------------------
// siblings
import ses from "./ses";
import subscriptions from "./subscriptions";
import terms from "./terms";
import users from "./users";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Flush stats
 *
 * @param {object} content - The content, not used on this route.
 * @param {function} callback - Callback.
 */
function clearStats(content, callback) {
  // run parallel
  parallel(
    // individual calls
    [
      users.clear,
      subscriptions.clear,
      terms.clear,
    ],
    // ready to re-create the caches
    callback,
  );
}


// EXPORTS
// =============================================================================

export default {
  // ses
  getSesCount: ses.getCount,
  setSesCount: ses.setCount,
  getSesData: ses.getData,
  setSesData: ses.setData,
  clearSes: ses.clear,
  // terms
  getTerms: terms.get,
  setTerms: terms.set,
  clearTerms: terms.clear,
  // subscriptions
  getSubscriptions: subscriptions.get,
  setSubscriptions: subscriptions.set,
  clearSubscriptions: subscriptions.clear,
  // users
  getUsers: users.get,
  setUsers: users.set,
  clearUsers: users.clear,
  // misc
  clearStats,
};

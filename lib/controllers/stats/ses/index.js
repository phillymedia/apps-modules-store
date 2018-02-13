// DEPENDENCIES
// =============================================================================
// THIRD-PARTY -------------------------------
import { parallel } from "async";
// APP -------------------------------
// siblings
import count from "./count";
import data from "./data";


// METHODS
// =============================================================================
// PUBLIC -------------------------------

/**
 * Clear store.
 *
 * @param {function} callback - A callback function.
 * @return {function} core.add - The shared setter.
 */
function clear(callback) {
  // combined feed, games, tweets
  parallel([
    next => count.remove(next),
    next => data.remove(next),
  ], callback);
}


// EXPORTS
// =============================================================================

export default {
  getCount: count.get,
  setCount: count.set,
  getData: data.get,
  setData: data.set,
  clear,
};

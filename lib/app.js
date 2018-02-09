// DEPENDENCIES
// =============================================================================
import { log } from "philly-helpers";

// EMERGENCY ERROR HANDLING
// =============================================================================
// don't blow up the app, just in case
process.on("unhandledRejection", (reason, p) => {
  log.error("Unhandled Rejection from Philly Store module at: Promise", p, "reason:", reason);
});
// don't blow up the app, just in case
process.on("uncaughtException", (err) => {
  log.error("Unhandled Exception from Philly Store module:", err);
});


// EXPORTS
// =============================================================================
import { sns } from "COMP/aws";
import detail from "COMP/detail";
import feed from "COMP/feed";
import logs from "COMP/logs";
import stats from "COMP/stats";

export {
  feed,
  detail,
  logs,
  stats,
  sns,
};

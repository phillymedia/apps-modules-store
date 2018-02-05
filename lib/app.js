// EMERGENCY ERROR HANDLING
// =============================================================================
process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
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

// DEPENDENCIES
// =============================================================================

import full from "./articles/full";
import brief from "./articles/brief";


// EXPORT
// =============================================================================

export default {
	// full
	getArticles: full.get,
	setArticles: full.set,
	removeArticles: full.remove,
	// brief
	getArticlesBrief: brief.get,
	setArticlesBrief: brief.set,
	removeArticlesBrief: brief.remove,
};

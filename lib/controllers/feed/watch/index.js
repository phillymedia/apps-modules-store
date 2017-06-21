// DEPENDENCIES
// =============================================================================

import phillyArticles from "./philly/articles";


// EXPORT
// =============================================================================

export default {
	// philly
	getArticlesPhilly: phillyArticles.get,
	setArticlesPhilly: phillyArticles.set,
	removeArticlesPhilly: phillyArticles.remove,
};

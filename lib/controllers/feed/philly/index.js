// DEPENDENCIES
// =============================================================================

import full from "./articles/full";
import brief from "./articles/brief";
import search from "./search";
import sections from "./sections";


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
	// search
	getSearch: search.get,
	setSearch: search.set,
	removeSearch: search.remove,
	// sections
	getSections: sections.get,
	setSections: sections.set,
	removeSections: sections.remove,
};

// DEPENDENCIES
// =============================================================================

import full from "./articles/full";
import brief from "./articles/brief";
import search from "./search";
import sections from "./sections";
import fullV1 from "./articles/legacy/v1/full";
import briefV1 from "./articles/legacy/v1/brief";
import searchV1 from "./search/legacy/v1";


// EXPORT
// =============================================================================

export default {
  // full
  getArticles: full.get,
  getArticlesV1: fullV1.get,
  setArticles: full.set,
  setArticlesV1: fullV1.set,
  removeArticles: full.remove,
  removeArticlesV1: fullV1.remove,
  // brief
  getArticlesBrief: brief.get,
  getArticlesBriefV1: briefV1.get,
  setArticlesBrief: brief.set,
  setArticlesBriefV1: briefV1.set,
  removeArticlesBrief: brief.remove,
  removeArticlesBriefV1: briefV1.remove,
  // search
  getSearch: search.get,
  getSearchV1: searchV1.get,
  setSearch: search.set,
  setSearchV1: searchV1.set,
  removeSearch: search.remove,
  removeSearchV1: searchV1.remove,
  // sections
  getSections: sections.get,
  setSections: sections.set,
  removeSections: sections.remove,
};

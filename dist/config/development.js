"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _global=require("./global"),_global2=_interopRequireDefault(_global);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_global2.default.env="development",_global2.default.database.logs.limit=10;var shortExpires=15,longExpires=60,vLongExpires=1440;_global2.default.store.sports.expiresInMinutes={combined:shortExpires,articles:shortExpires,games:shortExpires,tweets:shortExpires},_global2.default.store.sportsLegacy.v1.expiresInMinutes={combined:shortExpires,articles:shortExpires,games:shortExpires,tweets:shortExpires},_global2.default.store.main.expiresInMinutes=shortExpires,_global2.default.store.mainLegacy.v1.expiresInMinutes=shortExpires,_global2.default.store.search.expiresInMinutes=vLongExpires,_global2.default.store.searchLegacy.v1.expiresInMinutes=vLongExpires,_global2.default.store.sections.expiresInMinutes=vLongExpires,_global2.default.store.watch.expiresInMinutes=shortExpires,_global2.default.store.today.expiresInMinutes=shortExpires,_global2.default.store.admin.expiresInMinutes=longExpires,_global2.default.store.detail.expiresInMinutes=longExpires,exports.default=_global2.default;
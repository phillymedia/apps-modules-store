"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("../../../../../../../config"),_core=require("../../../../../core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _store=_config.store.mainLegacy.v1,_source=_store.source,_type=_store.type.articles,_delay=_store.expiresInMinutes;function set(name,content,callback){return _core2.default.add({source:_source,type:_type,delay:_delay,name:name,content:content},callback)}exports.default=set;
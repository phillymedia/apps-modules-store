"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("../../../../../../../config"),_core=require("../../../../../core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _store=_config.store.mainLegacy.v1,_source=_store.source,_name=_store.name,_type=_store.type.articles;function get(callback){return _core2.default.find({source:_source,type:_type,name:_name},callback)}exports.default=get;
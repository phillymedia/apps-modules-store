"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("../../../../../config"),_core=require("../../../core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _store=_config.store.watch,_source=_store.source,_type=_store.type.articles;function get(name,callback){return _core2.default.find({source:_source,type:_type,name:name},callback)}exports.default=get;
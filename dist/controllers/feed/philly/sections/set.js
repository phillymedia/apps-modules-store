"use strict";var _assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault(_assign),_config=require("../../../../config"),_core=require("../../core"),_core2=_interopRequireDefault(_core);Object.defineProperty(exports,"__esModule",{value:!0});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _store=_config.store.sections,_source=_store.source,_type=_store.type,_name="philly",_delay=_store.expiresInMinutes;function set(content,callback){var data=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},settings=(0,_assign2.default)({source:_source,type:_type,delay:_delay,name:_name,content:content},data);return _core2.default.add(settings,callback)}exports.default=set;
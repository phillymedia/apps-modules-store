"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMany=exports.get=void 0;var _core=require("./core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function get(id,callback){return _core2.default.findOne({id:id},callback)}function getMany(ids,callback){return _core2.default.findMany({id:ids},callback)}exports.get=get,exports.getMany=getMany;
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _core=require("../core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _name="subscriptions";function get(callback){return _core2.default.find({name:_name},callback)}exports.default=get;
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.byArn=exports.all=void 0;var _db=require("../../../db"),_core=require("../../core"),_core2=_interopRequireDefault(_core);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _schema=_db.db.model("Application");function all(callback){return _core2.default.remove({schema:_schema},callback)}function byArn(arn,callback){return _core2.default.remove({schema:_schema,arn:arn},callback)}exports.all=all,exports.byArn=byArn;
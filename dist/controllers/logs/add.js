"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _core=require("../core"),_core2=_interopRequireDefault(_core),_schema2=require("./schema"),_schema3=_interopRequireDefault(_schema2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function add(settings,callback){var params={date:settings.date||new Date,target:settings.target,message:settings.message};settings.article_id&&(params.article_id=settings.article_id),_core2.default.add(_schema3.default,params,function(err,data){return err?callback(err):callback(null,data)})}exports.default=add;
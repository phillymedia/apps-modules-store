"use strict";var _slicedToArray2=require("babel-runtime/helpers/slicedToArray"),_slicedToArray3=_interopRequireDefault(_slicedToArray2),_lodash=require("lodash"),_async=require("async"),_config=require("../../../config"),_core=require("../../core"),_core2=_interopRequireDefault(_core),_find=require("./find");Object.defineProperty(exports,"__esModule",{value:!0}),exports.addMany=exports.add=void 0;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function add(settings,callback){var schema=settings.schema;(0,_lodash.unset)(settings,["schema"]),_core2.default.add(schema,settings,function(err,data){if(err)return err.code===_config.database.errors.duplicate?(settings.schema=schema,(0,_find.findByArn)(settings,callback)):callback(err);if((0,_lodash.isArray)(data)&&1===data.length){var _data=data,_data2=(0,_slicedToArray3.default)(_data,1);data=_data2[0]}return callback(null,data)})}function addMany(settings,documents,callback){var _settings=settings,schema=_settings.schema;(0,_async.map)(documents,function(document,next){var params={};return settings.map&&(0,_lodash.forEach)(settings.map,function(value,key){params[key]=document[value]}),settings.username&&(params.username=settings.username),next(null,params)},function(mapErr,mapped){return mapErr?callback(mapErr):_core2.default.addMany(settings.schema,mapped,function(err,data){if(err){if(err.code===_config.database.errors.duplicate&&data){var arns=(0,_lodash.map)(data,function(dupError){return dupError.arn});if(settings={schema:schema,arn:arns},1===settings.arn.length){var _arns=(0,_slicedToArray3.default)(arns,1);settings.arn=_arns[0]}return(0,_find.findByArn)(settings,callback)}return callback(err)}return callback(null,data)})})}exports.add=add,exports.addMany=addMany;
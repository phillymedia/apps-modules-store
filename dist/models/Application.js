"use strict";var _phillyHelpers=require("philly-helpers"),_db=require("../controllers/db"),schemaName="Application",Schema=new _db.db.Schema({arn:{type:String,required:!0,index:{unique:!0}},attributes:{type:Object,required:!0},expireAt:{type:Date,default:_phillyHelpers.endOfMonth,index:{expireAfterSeconds:0}}});Schema.set("validateBeforeSave",!0),module.exports=_db.db.model(schemaName,Schema);
"use strict";var _db=require("../controllers/db"),schemaName="Feed",Schema=new _db.db.Schema({expireAt:{type:Date,default:Date.now,index:{expireAfterSeconds:0}},source:{type:String,required:!0},type:{type:String,required:!0},name:{type:String,required:!0},content:{type:Object,required:!0},version:{type:String,required:!1}});Schema.index({name:1,type:1,source:1,version:1},{sparse:!0}),Schema.set("validateBeforeSave",!0),module.exports=_db.db.model(schemaName,Schema);
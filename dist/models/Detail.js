"use strict";var _db=require("../controllers/db"),schemaName="Detail",Schema=new _db.db.Schema({expireAt:{type:Date,default:Date.now},id:{type:Number,required:!0,index:{unique:!0}},content:{type:Object,required:!0}},{capped:{size:10485760,max:100,autoIndexId:!0}});Schema.index({expireAt:1},{expireAfterSeconds:0}),Schema.set("validateBeforeSave",!0),module.exports=_db.db.model(schemaName,Schema);
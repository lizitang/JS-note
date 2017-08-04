//简单拷贝
function simpleClone1(obj){
	var cloneObj={};
	if(typeof obj != 'Object'){
		return false;
	}
	for(var i in obj){
		cloneObj[i] = obj[i];
	}
	return cloneObj;
}

//使用属性描述符
function simpleClone2(obj){
	var copy = Object.create(Object.getPrototypeOf(obj));
	Object.getOwnPropertyNames(obj).forEach(function(prokey){
		var desc = Object.getOwnPropertyDescriptor(obj,prokey);
		Object.defineProperty(copy,prokey,desc);
	});
	return copy;
}

//jwuery的extend()方法
var obj1 = {a:1,b:2,c:[1,2,3]};
var obj2 = $.extend({},obj1);

//深拷贝

//1.遍历复制
function deepCopy(obj,cloneObj){
	if(typeof obj != "object"){
		return false;
	}
	cloneObj =cloneObj || {};
	for(var i in obj){
		if(typeof obj[i] === "object"){
			cloneObj[i] = (obj[i] instanceof Array )? []:{};
			arguments.callee(obj[i],clone[i]);
		}else{
			cloneObj[i] = obj[i]
		}
	}
	return false;
}

//2.json

function jsonClone(obj){
	return JSON.parse(JSON.stringify(obj));
}

//3.使用jQuery的extend()方法
var obj1 = {a:1,b:2,c:[1,2,3]};
var obj2 = $.extend(true,{},obj1);
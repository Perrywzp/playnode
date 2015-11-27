var isType = function(type){
	return function(obj){
		return toString.call(obj) == '[object ' + type + ']';
	};
};
var isString = isType('string');
var isFunction = isType('Function');
console.log(isFunction);
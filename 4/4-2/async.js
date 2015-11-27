var async = function(callback){
	process.nextTick(callback);
};

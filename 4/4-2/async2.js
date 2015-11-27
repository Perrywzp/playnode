var async = function(callback){
	process.nextTick(function(){
		var results = something;
		if(error){
			return callback(error);
		}
		callback(null,results);
	});
};
try{
	req.body = JSON.parse(buf,options.reviver);
}catch(err){
	err.body = buf;
	err.status = 400;
	return callback(err);
}
callback();
//http请求场景
var options = {
	host:'www.baidu.com',
	port:80,
	path:'/upload',
	method:'post'
};
var req = http.request(options,function(res){
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS' + JSON.stringfy(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('BODY:' + chunk);
	});
	res.on('end',function(){
		//TODO
	});
});

req.on('error',function(e){
	console.log('problem with request : ' + e.message);
});

//write data to request body
req.write('data\n');
req.write('data\n');
req.end();

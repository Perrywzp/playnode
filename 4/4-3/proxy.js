var proxy = new events.EventEmitter();
var status = "ready";
var select = function(callback){
	proxy.once("selected",callback);
	if (status === "ready") {
		status = "pending";
		db.select("SQL", function(results) {
			proxy.emit("selected", results);
			status = "ready";
		});
	}
};
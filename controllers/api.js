exports.install = function(){
	// F.route('/api/*', api, ['cors']);		
	F.route("/api/*", api, ['cors']);  
	F.route('/api/login/', json_login, ['unauthorize', 'post', '*Login']);
};

function api(){
	console.log("API CALL REQUEST: ");
	console.log(this.req);	
	console.log("BODY: ");
	console.log(this.params);		
	this.json({ success: true, data:{} });
}

function json_login() {
	var self = this;
	
}
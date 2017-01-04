// const domains = ['totaljs.mx', 'x.totaljs.mx'];

//Testing with this local domains:
//sgiw.mx 		Entidad sitio raiz default
//roberto.sgiw.mx 	Entidad especifica sitio
//panel.sgiw.mx 		Panel de administración


exports.install = function(){
	//???? F.route(domains, sitio);	
	// xxxxxxx F.route("/params/{nombre}/{edad}", params);
	// xxxxxxx F.route("/request/*", request);

	// Routes 
	F.route("/*", sitio);  
	F.route("[all]/*", sitio);  
	F.route("/admin", admin);  
	// F.route("/api/*", query);  	
	
	// Exceptions ----
	F.route('#404', error); // Not Found	
};

/*function query(){
	console.log("API CALL REQUEST: ");
	console.log(this.req);	
	console.log("BODY: ");
	console.log(this.params);		
	this.json({ success: true, data:{} });
}*/

function sitio(){
	var self = this;
	var request = JSON.stringify(this.uri);		
	console.log("sitios");
	self.view("sitio");
}
function admin(){
	var self = this;
	// self.plain("Sitio debug");
	// this.plain(self.uri);
	console.log("panel")
	self.view("admin");
}
function error(){
	this.plain("ERROR SITIO");	
	// this.layout("/error/layout");
	// this.view("/error/404");
}


function params(nombre, edad){
	var self = this;
	// var model = self.body;
	// self.json({nombre:nombre, edad:edad});
	var response = {nombre:nombre, edad:edad};
	// console.log(model);
	self.view("params", response);
}
function request(){
	var self = this;
	var model = self.body;
	// self.json({});	
	// console.log(model);
	self.view("request");
}
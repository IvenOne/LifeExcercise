var http = require('http');
var url = require('url');

http.createServer(
 function(request,response){
     response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	 if(request.url!=="/favicon.ico"){
		 response.write("request.url is "+request.url+"<br/>");
		 console.log(request.url);
		var pathname = url.parse(request.url).pathname;
		response.write("pathname is :"+pathname+"<br/>");
		console.log(pathname);
		pathname = pathname.replace(/\//,'');
		response.write("regression passion is:"+pathname);
		console.log(pathname);
		response.end('');
	 }
 }
).listen(8000);

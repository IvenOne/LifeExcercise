var  http  =  require('http');  
var User = require('./models/user');
http.createServer(function  (request,  response)  {  
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); 
    if(request.url!=="/favicon.ico"){  //清除第2此访问  
        var user = new User();
		user.name = "张桑拿";
		user.enter();
        response.end('');//不写则没有http协议尾,但写了会产生两次访问  
    }  
}).listen(8000);  
console.log('Server  running  at  http://127.0.0.1:8000/');  
var http=require('http');
var fs = require('fs');
var server=http.createServer(function(req,res){
  
    if(req.url=="/")
    {
        let myData = fs.readFileSync('./home1.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
       
    }
 });
server.listen(5050);
console.log("Server run successfully");
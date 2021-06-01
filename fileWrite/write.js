var http=require('http');
var fs = require('fs');
var server=http.createServer(function(req,res){
  
    if(req.url=="/")
    {
        fs.writeFile('demo.txt',"hello  world",function(error){
             if(error){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File write fail");
            res.end();
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("File write successfully");
        res.end(); 
    }
        });

       
    }
 });
server.listen(5050);
console.log("Server run successfully");
// this is for writeFile... 
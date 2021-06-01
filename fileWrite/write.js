var http=require('http');
var fs = require('fs');
var server=http.createServer(function(req,res){
  
    if(req.url=="/")
    {
        fs.writeFile('demo.txt','update.txt',function(error){
             if(error){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write("File rename fail");
            res.end();
    }
    else
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("File rename successfully");
        res.end(); 
    }
        });

       
    }
 });
server.listen(5050);
console.log("Server run successfully");
// okay when you run it in browser then 1stly u see "File rename successfully" then again u refresh it an see "File rename fail" bcz after hitting 1st time it .txt will update and second time it will not match.. Happy coding:)
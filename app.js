var http=require('http');
var url = require('url');
const { type } = require('os');
var server=http.createServer(function(req,res){
  
      if(req.url=="/")
      {
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<h2>This is HOME page</h2>')
         res.end();
      }
      else if(req.url=="/about")
      {
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<h1>This is ABOUT page</h1>')
         res.end();
      }
      else if(req.url=="/contact")
      {
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<h1>This is CONTACT page</h1>')
         res.end();
      }
});
server.listen(5050);
console.log("Server run successfully");



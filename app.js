// var http=require('http');
//var url = require('url');
// const { type } = require('os');
// var server=http.createServer(function(req,res){
  
//       if(req.url=="/")
//       {
//          res.writeHead(200,{'Content-Type':'text/html'})
//          res.write('<h2>This is HOME page</h2>')
//          res.end();
//       }
//       else if(req.url=="/about")
//       {
//          res.writeHead(200,{'Content-Type':'text/html'})
//          res.write('<h1>This is ABOUT page</h1>')
//          res.end();
//       }
//       else if(req.url=="/contact")
//       {
//          res.writeHead(200,{'Content-Type':'text/html'})
//          res.write('<h1>This is CONTACT page</h1>')
//          res.end();
//       }
// });


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
//   var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

// server.listen(8080);
// console.log("Server Run Succesfully");

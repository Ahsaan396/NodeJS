var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    if (req.url == "/") {
        let error = fs.writeFileSync('demosync.txt', "Welcome to sync fileWrite");
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File write fail");
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File write successfully");
            res.end();
        }
    }
}).listen(5050);
    console.log("Server run successfully");
// this is for writeFile...
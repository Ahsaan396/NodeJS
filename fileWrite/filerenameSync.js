var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

    if (req.url == "/") {
        let error = fs.renameSync('demosyncNew.txt','demosyncNewNew.txt');
        if (error) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File rename fail");
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File rename successfully");
            res.end();
        }
    }
}).listen(4040);
    console.log("Server run successfully");
// this is for renamefile...
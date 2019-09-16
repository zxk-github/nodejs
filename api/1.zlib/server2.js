var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var str = "hello word"

var server = http.createServer((req, res) => {
    var acceptEncoding = req.headers['accept-encoding'];
    if(acceptEncoding.indexOf('gzip') > -1) {
        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        })
        res.end(zlib.gzipSync(str))
    } else {
        res.end(str);
    }

}) 

server.listen(3000);

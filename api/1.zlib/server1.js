var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
var filepath = './note.txt';

var server = http.createServer((req, res) => {
    var acceptEncoding = req.headers['accept-encoding'];
    console.log(acceptEncoding)
    var gzip;

    if(acceptEncoding.indexOf('gzip') > -1) {
        gzip = zlib.createGzip();
        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        })
        fs.createReadStream(filepath).pipe(gzip).pipe(res);
    } else {
        fs.createReadStream(filepath).pipe(res);
    }
}) 

server.listen(3000);


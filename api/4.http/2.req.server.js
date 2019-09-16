var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('ok')
})

server.listen(2000)


var server = http.createServer( (req, res) => {
    
})






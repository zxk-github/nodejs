var http = require('http');

var server = http.createServer(function(res, req) {
    var url = req.url
    console.log(url);
})

server.listen(3000)

// 创建一个client
var client = http.get('http://127.0.0.1:3000', function(res) {
    res.pipe(process.stdout)
})
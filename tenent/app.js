const http = require('http');
const a = require('./a');

// console.log(b)
console.log(a);

const server = http.createServer(function(req, res) {
    console.log(1111);
    res.end('hello node')
})

server.listen('3210')
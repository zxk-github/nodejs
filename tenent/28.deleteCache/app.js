// const http = require('http');

// http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     Object.keys(require.cache).forEach(el => {
//         delete require.cache[el];
//     })

//     const moduleA = require('./moduleA');
//     res.end(`moduleA text ${moduleA.txt}`);
// }).listen('3001');

var open = false;
setTimeout(function() {
    open = true;
}, 10)

while(!open) {
    console.log("wait")
}
console.log('done')



const fs = require('fs');
const path = require('./getPath');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const aPath = path('./a.txt');
const bPath = path('./b.txt');
const cPath = path('./c.txt');
readFile(aPath)
.then((data) => {
    console.log(data.toString());
    return readFile(bPath)
})
.then((data) => {
    console.log(data.toString());
    return readFile(cPath)
})
.then((data) => {
    console.log(data.toString());
})
.catch((err) => {
    console.log(err);
})

Promise.all([readFile(aPath), readFile(aPath),readFile(aPath)])

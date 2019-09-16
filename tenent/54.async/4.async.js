const fs = require('fs');
const path = require('./getPath');
const util = require('util');

const aPath = path('./a.txt');
const bPath = path('./b.txt');
const cPath = path('./c.txt');

const readFile = (filePath) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000) 
    }).then(() => {
        return util.promisify(fs.readFile)(filePath);
    })
}
//await  后面是一个promise 如果是一个非promise 那就相当与没写
async function  getFile() {
    const aData = await readFile(aPath);
    console.log(aData.toString())
    const bData = await readFile(bPath);
    console.log(bData.toString())
    const cData = await readFile(cPath);
    console.log(cData.toString())
} 

getFile()

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
    const [aData, bDtata] = await Promise.all([readFile(aPath), readFile(bPath)])
    console.log(aData.toString(), bDtata.toString())
    const cData = await readFile(cPath);
    console.log(cData.toString())
    return aData.toString() + bDtata.toString() + cData.toString()
} 

// async返回的是一个promsie对象，如果要取到结果
// 在非异步方法中调用异步方法
// function main() {
//     getFile().then(function(str) {
//         console.log(str)
//     });
   
// }
// main();

async function main() {
    try{
        const str =  await getFile()
        console.log(str)
    } catch(err) {
        console.log(err)
    }
   
}
main()

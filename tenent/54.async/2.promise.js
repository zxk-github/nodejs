const fs = require('fs');
const path = require('./getPath');

const aPath = path('./a.txt');
const bPath = path('./b.txt');
const cPath = path('./c.txt');

function filePro(filePath) {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) {
                reject(err)
            }
            resolve(data.toString());
        })
    }) 
}

// filePro(aPath)
// .then((data) => {
//     console.log(data);
//     return filePro(bPath)
// }) 
// .then((data) => {
//     console.log(data);
//     return filePro(cPath)
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })


Promise.all([filePro(aPath), filePro(bPath), filePro(cPath)])
.then(([aDate, bDate, cDate]) => {
    console.log(aDate, bDate, cDate);
})
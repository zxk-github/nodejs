const fs = require('fs');
const path = require('./getPath');

const aPath = path('./a.txt');
const bPath = path('./b.txt');
const cPath = path('./c.txt');


fs.readFile(aPath, (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString());
    fs.readFile(bPath, (err, data) => {
        if(err) {
            console.log(err)
        }
        console.log(data.toString());
        fs.readFile(cPath, (err, data) => {
            if(err) {
                console.log(err)
            }
            console.log(data.toString());
        })
    })
    
})




var fs = require('fs');

var data;

// fs.readFileSync(path)  同步读取文件
try{ 
    data = fs.readFileSync('./note.txt', 'utf8');
    // console.log(data);
} catch(err) {
    console.log(err)
}   

// fs.readFile(path, callback) 异步读取文件
fs.readFile('./note.txt', (err, data) => {
    if(err) {
        console.error('文件读取出错', err)
        return ;
    }

    // console.log(data);
})

/**
 *  hello word
    <Buffer 68 65 6c 6c 6f 20 77 6f 72 64>
    同步读取的是文件内容，异步读取获得的是文件读取的的buffer
 *  */

// fs.createReadStream(filePath, utf8) 通过文件流读取文件 适合大体积文件读取

var readStream = fs.createReadStream("./note1.txt", 'utf8');
readStream
    .on('data', (chunk) => {
        console.log(chunk);
    })
    .on('error', (err) => {
        console.log(err, "文件读取出错")
    })
    .on('end', () =>{
        console.log('文读取结束')
    })
    .on('close', () => {
        console.log('文件读取任务已经关闭，不会再有事件发生')
    }) 







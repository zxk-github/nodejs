var fs = require('fs');

// 文件存在覆盖文件内容，文件不存在创建文件  fs.writeFile(path, content, charCode, callback) 异步写入 

// 异步写入
fs.writeFile('./note1.txt', 'hello word111', 'utf8', (err) => {
    if(err) {
        console.error(err)
        return ;
    }
})


// 同步写入 fs.writeFileSync(path, content, charCode, callback)

try{ 
    fs.writeFileSync('./note2.txt', 'hello word', 'utf8')
} catch(err) {
    console.error(err);
} 

// 通过文件流写入
var writeStream = fs.createWriteStream('./note3.txt', 'utf8');

writeStream
    .on('close', () => {
        console.log('写入文件流已经关闭')
    })
writeStream.write('hello');
writeStream.write('word');
writeStream.end();




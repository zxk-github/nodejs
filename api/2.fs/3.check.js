var fs = require('fs');

// fs.exsist() 目前已经是启用状态，一般使用fs.access(path, callback)

fs.access('./note.txt', (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('文件存在')
})
// fs.access() 除了判断文件是否存在，还可以判断文件权限


// 创建目录

// fs.mkdir('./dir', callback)
fs.mkdir('./dir', (err) => {
    if(err) {
        console.log(err)
    }
    console.log("文件夹创建完成")
})

// fs.mkdirSync('./dir1')
try{
    fs.mkdirSync('./dir1');
    console.log('创建文件夹完成');
} catch(err) {
    console.log(err);
}

// 删除文件 不能删除文件夹
// fs.unlink(path, callback)
fs.unlink('./note.txt', (err) => {
    if(err) {
        return console.error('文件删除成功')
    }
    console.log("删除文件成功")
})

// fs.unlinkSync(path)

try {   
    fs.unlinkSync('./note2.txt')
    console.log("删除成功")
} catch(err) {  
    console.log(err);
}





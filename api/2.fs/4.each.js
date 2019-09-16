var fs = require('fs');
var path = require('path');

fs.unlink('./dir', (err) => {
    if(err) {
        return console.error(err)
    }
    console.log("删除成功")
})

// 遍利目录 
// 同步版本，注意：fs.readdirSync()只会读一层，所以需要判断文件类型是否目录，如果是则进行递归遍历

try{
    var files = fs.readdirSync('./dir');
    console.log(files)   // 子目录名称组成的数组
} catch(err) {
    console.log(err)
}

// fs.readdirSync 返回的是一个文件和文件夹名称组成的一个数组

var getFilesInDir = function(dir) {
    
    var results = [path.resolve(dir)];
    var files = fs.readdirSync(dir, 'utf8');
   
    files.forEach((file) => {
        file = path.resolve(dir, file);
        var stats = fs.statSync(file);
        if(stats.isFile()) {
            results.push(file);
        } else {
            results = results.concat(getFilesInDir(file));
        }
    })

    return results;
}

var files = getFilesInDir('./');
// console.log(files);


// fs.rename(oldPath, newPath, callback); 文件夹重命名，如果是文件会报错，但是会命名成功，如果之前文件或者文件夹存在会覆盖之前的

/*
fs.rename('./dir', './dir2', function(err) {
    if(err) {
        return    console.log(err);
    }
})

fs.renameSync('./dir', './dir2')
*/

// 监听文件修改  fs.watch() 比 fs.watchFile() 高效的多

// fs.watchFile(path, options, callback) 轮询，每隔一段时间检查文件是够发生变化，所以在不用平台上基本表现一致
var options = {
    persistent: true,
    interval: 2000  // 多久检查一次
}

fs.watchFile('./dir2.txt', options, (curr, prev) => {
    // curr prev 是监听文件的状态，fs。stat()的实例
    // 可以通过fs.unwatch() 移除监听
})

// 修改文件权限 fs.chmod()

/*
获取文件状态
fs.stat(path, callback)  fs.statSync(path)
stat.isFile() 是否是文件
stat.isDirectory() 是否是目录
{
    dev: 2114,
    ino: 48064969,
    mode: 33188,
    nlink: 1,
    uid: 85,
    gid: 100,
    rdev: 0,
    size: 527,
    blksize: 4096,
    blocks: 8,
    atime: Mon, 10 Oct 2011 23:24:11 GMT, // 访问时间
    mtime: Mon, 10 Oct 2011 23:24:11 GMT,  // 文件内容修改时间
    ctime: Mon, 10 Oct 2011 23:24:11 GMT,  // 文件状态修改时间
    birthtime: Mon, 10 Oct 2011 23:24:11 GMT  // 创建时间
  }
  atime：Access Time // 访问时间
  mtime:: Modified Time // 文件内容修改时间
  ctime: Changed Time. // 文件状态修改时间，比如修改文件所有者、修改权限、重命名等
  birthtime: Birth Time // 创建时间。在某些系统上是不可靠的，因为拿不到。

  */







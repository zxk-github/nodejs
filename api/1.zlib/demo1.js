var fs = require('fs');
var zlib = require('zlib');

// 压缩
var gzip = zlib.createGzip();

var inFile = fs.createReadStream('./note.txt');
var out = fs.createWriteStream('./note.txt.gz');

inFile.pipe(gzip).pipe(out);

// 解压
var gunzip = zlib.createGunzip();
var inFile2 = fs.createReadStream('./note.txt.gz');
var out2 = fs.createWriteStream('./note1.txt');

inFile2.pipe(gunzip).pipe(out2);



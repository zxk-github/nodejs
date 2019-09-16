var {Buffer} = require('buffer');

console.log(Buffer)
/*
    创建buffer 
    new Buffer(array)  直接废除 不能直接使用构造函数的形式
    Buffer.alloc(length)
    Buffer.allocUnsafe(length)
    Buffer.from(array)
*/


var array = 'buffer'.split('').map(function(v) {
    return '0x' + v.charCodeAt(0).toString(16)
})

console.log(array)

console.log(Buffer.alloc)

// Buffer.alloc(length, [初始值])
var buf1 = Buffer.alloc(10) // 长度是10 初始值是0x0
var buf2 = Buffer.alloc(10, 1)

console.log(buf1, buf2)

var buf3 = Buffer.allocUnsafe(10) // 长度是10 填充值不知道
console.log(buf3)

var buf4 = Buffer.from([1, 2, 3]) // 长度是3，初始值是0x1 0x2 0x3


// buffer ==> string
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
console.log(buf.toString())

// string == > buffer
// 通过string创建buffer，跟将buffer转换成字符串时，记得编码保持一致。不然会出现乱码



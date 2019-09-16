var querystring = require("querystring");


// 对url查询参数(字符串)进行解析。生成易于分析的json格式
querysting.parse(url.query, sep, eq, options])

querystring.stringify(obj, [sep, eq, options])


再来看下sep、eq有什么作用。相当于可以替换&、=为自定义字符，对于下面的场景来说还是挺省事的。

var str1 = 'nick=casper&age=24&extra=name-chyingp|country-cn';
var obj1 = querystring.parse(str1);
var obj2 = querystring.parse(obj1.extra, '|', '-');
console.log(JSON.stringify(obj2, null, 4));
输出如下

{
    "name": "chyingp",
    "country": "cn"
}
查询参数拼接：querystring.stringify()
querystring.stringify(obj[, sep[, eq[, options]]])

没什么好说的，相当于parse的逆向操作。直接看代码

var querystring = require('querystring');

var obj1 = {
    "nick": "casper",
    "age": "24"
};
var str1 = querystring.stringify(obj1);
console.log(str1);

var obj2 = {
    "name": "chyingp",
    "country": "cn"
};
var str2 = querystring.stringify(obj2, '|', '-');
console.log(str2);
输出如下

nick=casper&age=24
name-chyingp|country-cn




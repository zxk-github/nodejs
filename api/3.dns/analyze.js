var dns = require('dns');

// 查找一个域名对应的ip, 可以通过dns.lookup()
dns.lookup('www.qq.com', function(err, address, family) {
    if(err) {
        return console.log(err)
    }
    console.log(address)

})

// 如果一个域名对应多个IP呢 
var options = {
    all: true
}
dns.lookup('www.qq.com', options, function(err, address, family) { 
    if(err) {
        return console.error(err)
    }
    console.log(address)  // [ { address: '125.39.52.26', family: 4 } ]
})

// dns.lookup 本地配置了Host时候 会对查询有影响
// dns.resolve4 本地配置的Host不会对查询产生影响





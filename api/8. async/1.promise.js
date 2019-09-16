
// 同步的过程
console.log(1)
var pro = new Promise(function(resolve, reject) {
    console.log(2)
    setTimeout(function() {
        console.log(6)
        resolve('aa')
    }, 1000) 
    console.log(3)
}).then(function(result) {
    console.log(4, result)
})
console.log(5)
setTimeout(function() {
    console.log(7)
}, 1000)


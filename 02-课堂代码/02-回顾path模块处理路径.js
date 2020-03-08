

const path = require('path');

// 路径1 - 本地路径
const url1 = 'c:/aa/bb/11.txt';

// 路径2 - 网络路径
const url2 = 'http://www.baidu.com/search/index.html';

// path.join()          一般用来拼接本地路径。

// const p1 = path.join(url2,'aa/bb');
// console.log(p1);

// path.extname()       获取后缀名 - 注意
//  细节：如果路径不是包含文件名，后缀名就为空
const p2 = path.extname(url1);
const p3 = path.extname(url2);

console.log(p2);
console.log(p3);

// path.basename()      获取文件全名 - 了解
// const p4 = path.basename(url1);
// const p5 = path.basename(url2);

// console.log(p4);
// console.log(p5);
